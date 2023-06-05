"use client";

import Link from "next/link";
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

  return (
    <div className="flex flex-col gap-2">
      <GithubLogin  />
      <Link
        href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/oauth2/authorization/google`}
      >
        <GoogleLogin />
      </Link>
      <Link
        href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/oauth2/authorization/kakao`}
      >
        <KakaoLogin/>
      </Link>
      <Link
        href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/oauth2/authorization/naver`}
      >
        <NaverLogin/>
      </Link>
    </div>
  );
};
export default Login;
