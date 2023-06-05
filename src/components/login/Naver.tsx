import Image from "next/image";
import naverImage from "@assets/icons/login/naver.png";
import LayoutLoginButton from "./LayoutLoginButton";
import LogoTitle from "./LogoTitle";
import { LoginHandlerType } from "./Login";

const NaverLogin = () => {
  return (
    <LayoutLoginButton className="bg-[#04C75A]">
      <Image
        width={50}
        src={naverImage}
        alt={"naver login"}
        style={{ objectPosition: "50% 50%" }}
      />
      <LogoTitle title={"naver"} />
    </LayoutLoginButton>
  );
};
export default NaverLogin;
