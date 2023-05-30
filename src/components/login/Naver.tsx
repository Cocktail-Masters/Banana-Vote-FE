import Image from "next/image";
import naverImage from "@assets/icons/login/naver.png";
import LayoutLoginButton from "./LayoutLoginButton";
import LogoTitle from "./LogoTitle";
import { LoginHandlerType } from "./Login";

const NaverLogin = ({
  onClickHandler,
}: {
  onClickHandler: LoginHandlerType;
}) => {
  return (
    <LayoutLoginButton className="bg-[#04C75A]" onClickHandler={onClickHandler}>
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
