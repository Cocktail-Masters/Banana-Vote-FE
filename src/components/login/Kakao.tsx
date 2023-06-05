import Image from "next/image";
import kakaoImage from "@assets/icons/login/kakao.png";
import LayoutLoginButton from "./LayoutLoginButton";
import LogoTitle from "./LogoTitle";
import { LoginHandlerType } from "./Login";

const KakaoLogin = () => {
  return (
    <LayoutLoginButton className={"bg-[#FEE601]"}>
      <Image
        width={50}
        src={kakaoImage}
        alt={"kakao login"}
        style={{ objectPosition: "50% 50%" }}
      />
      <LogoTitle title={"kakao"} />
    </LayoutLoginButton>
  );
};
export default KakaoLogin;
