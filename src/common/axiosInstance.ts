/**
 * @author mingyu
 */
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

import { camelizeKeys, decamelizeKeys } from "humps";

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
  timeout: 5000,
});

/**
 * 요청 시 인터셉터
 */
// api.interceptors.request.use(
//   (config) => {
//     const accessToken = sessionStorage.getItem("ACCESS_TOKEN");

//     if (!accessToken) {
//       config.headers["Authorization"] = null;
//     } else {
//       config.headers["Authorization"] = `Bearer ${accessToken}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

/**
 * response camelize setting
 */

const jsonToObj = async (data: string) => {
  return await JSON.parse(data);
};

const ObjToJson = (data: Object) => {
  return JSON.stringify(data);
};

// Axios middleware to convert all api responses to camelCase
api.interceptors.response.use((response: AxiosResponse) => {
  if (
    response.data &&
    response.headers["content-type"] === "application/json"
  ) {
    response.data = camelizeKeys(response.data);
  }
  return response;
});
// Axios middleware to convert all api requests to snake_case
api.interceptors.request.use(async (config) => {
  if (!config.headers) return config;

  let token: string | null = localStorage.getItem("token");

  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  const newConfig = { ...config };
  newConfig.url = config.url;
  if (config.method === "patch") {
    newConfig.data = decamelizeKeys(newConfig.data);
  }
  if (!!config?.params) {
    newConfig.params = decamelizeKeys(config.params);
  }
  if (!!config?.data?.body) {
    newConfig.data.body = ObjToJson(
      decamelizeKeys(await jsonToObj(config.data.body))
    );
  }
  return newConfig;
});
export default api;
