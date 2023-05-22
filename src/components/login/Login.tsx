"use client";
import api from "@/common/axiosInstance";
import axios from "axios";
import { useCallback } from "react";
import GithubLogin from "./Github";
import GoogleLogin from "./Google";
import KakaoLogin from "./Kakao";
import NaverLogin from "./Naver";
//- kakao
// - google
// - naver
export type LoginHandlerType = () => void;
const Login = () => {
  const createOnClickHandle = useCallback((a: string) => {
    return async () => {
      let loginType = "naver";
      if (a == "1") {
        loginType = "github";
      } else if (a == "2") {
        loginType = "google";
      } else if (a == "3") {
        loginType = "kakao";
      } else if (a == "4") {
        loginType = "naver";
      }
      const response = await api.get(`/oauth2/authorization/${loginType}`);
      console.log(response);
    };
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <GithubLogin onClickHandler={createOnClickHandle("1")} />
      <GoogleLogin onClickHandler={createOnClickHandle("2")} />
      <KakaoLogin onClickHandler={createOnClickHandle("3")} />
      <NaverLogin onClickHandler={createOnClickHandle("4")} />
    </div>
  );
};
export default Login;
