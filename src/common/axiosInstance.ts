/**
 * @author mingyu
 */
import axios from "axios";
import camelize from "camelize";

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

api.interceptors.response.use(
  (response) => {
    camelize;
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
