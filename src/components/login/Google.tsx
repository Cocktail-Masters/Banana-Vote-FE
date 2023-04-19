import Image from "next/image";
import googleImage from "@assets/icons/login/google.png";
import LayoutLoginButton from "./LayoutLoginButton";
import LogoTitle from "./LogoTitle";
import { LoginHandlerType } from "./Login";

const GoogleLogin = ({
  onClickHandler,
}: {
  onClickHandler: LoginHandlerType;
}) => {
  return (
    <LayoutLoginButton className="bg-[#EFEFEF]" onClickHandler={onClickHandler}>
      <Image
        width={50}
        src={googleImage}
        alt={"google login"}
        style={{ objectPosition: "50% 50%" }}
      />
      <LogoTitle title={"google"} />
    </LayoutLoginButton>
  );
};
export default GoogleLogin;
