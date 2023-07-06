/**
 * @author mingyu
 */
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import jwt_decode from "jwt-decode";
import { jwtToken } from "@/types";

import { camelizeKeys, decamelizeKeys } from "humps";

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
  // timeout: 5000,
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
api.interceptors.response.use(
  (response: AxiosResponse) => {
    if (
      response.data &&
      response.headers["content-type"] === "application/json"
    ) {
      response.data = camelizeKeys(response.data);

      const isServer = typeof window === "undefined";
      const storage = isServer ? null : window.localStorage;
      let token: string | null =
        storage !== null ? localStorage.getItem("accessToken") : null;

      const decodeToken: jwtToken | null =
        token !== null ? jwt_decode(token) : null;
      const currentTime = Math.floor(Date.now() / 1000);

      const tokenIsExpired =
        decodeToken !== null && decodeToken.exp <= currentTime ? true : false;

      if (tokenIsExpired) {
        const accessToken = response.headers.Authorization.split(" ")[1];
        const refreshToken =
          response.headers["Authorization-refresh"].split(" ")[1];
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
      }
    }
    return response;
  },
  async (err) => {
    const {
      config,
      response: { status },
    } = err;
    // 리프레시 토큰만 담아서 보내주면 알아서 새 액세스 토큰하고 리프레시 토큰이 담겨져 오기 때문에 필요 없는 코드 추후에 삭제 예정

    // if ((status === 401 || status === 403) && !config.sent) {

    // config.sent = true;
    // if (
    //   config.headers.Authorization !== null &&
    //   config.headers.Authorization !== undefined &&
    //   config.headers.Authorization !== ""
    // ) {
    //   const accessToken = config.headers.Authorization.split(" ")[1];
    //   const refreshToken =
    //     config.headers["Authorization-refresh"].split(" ")[1];
    //   localStorage.setItem("accessToken", accessToken);
    //   localStorage.setItem("refreshToken", refreshToken);
    //   return axios(config);
    // } else {
    //   return Promise.reject(err);
    // }
    // } else {
    // return Promise.reject(err);
    // }
    return Promise.reject(err);
  }
);
// Axios middleware to convert all api requests to snake_case
api.interceptors.request.use(async (config) => {
  if (!config.headers) return config;
  // 서버인지 확인
  const isServer = typeof window === "undefined";
  const storage = isServer ? null : window.localStorage;
  let token: string | null =
    storage !== null ? localStorage.getItem("accessToken") : null;

  const decodeToken: jwtToken | null =
    token !== null ? jwt_decode(token) : null;
  const currentTime = Math.floor(Date.now() / 1000);

  const tokenIsExpired =
    decodeToken !== null && decodeToken.exp <= currentTime ? true : false;

  let refreshToken: string | null =
    storage !== null && tokenIsExpired
      ? localStorage.getItem("refreshToken")
      : null;

  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (refreshToken !== null) {
    config.headers["Authorization-refresh"] = `Bearer ${refreshToken}`;
  }
  const newConfig = { ...config };
  newConfig.url = config.url;
  if (config.method === "patch") {
    newConfig.data = decamelizeKeys(newConfig.data);
  }
  if (!!config?.params) {
    newConfig.params = decamelizeKeys(config.params);
  }
  if (config?.data) {
    newConfig.data = decamelizeKeys(config.data);
  }
  if (!!config?.data?.body) {
    console.log("트리거 걸림");
    newConfig.data.body = ObjToJson(
      decamelizeKeys(await jsonToObj(config.data.body))
    );
  }
  return newConfig;
});
export default api;
