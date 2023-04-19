import { useCallback } from "react";
import GithubrLogin from "./Github";
import GoogleLogin from "./Google";
import KakaoLogin from "./Kakao";
import NaverLogin from "./Naver";

export type LoginHandlerType = () => void;
const Login = () => {
  const createOnClickHandle = useCallback((a: string) => {
    return () => {
      console.log(a);
    };
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <GithubrLogin onClickHandler={createOnClickHandle("1")} />
      <GoogleLogin onClickHandler={createOnClickHandle("2")} />
      <KakaoLogin onClickHandler={createOnClickHandle("3")} />
      <NaverLogin onClickHandler={createOnClickHandle("4")} />
    </div>
  );
};
export default Login;
