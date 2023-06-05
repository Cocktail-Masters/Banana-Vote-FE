import Image from "next/image";
import googleImage from "@assets/icons/login/google.png";
import LayoutLoginButton from "./LayoutLoginButton";
import LogoTitle from "./LogoTitle";
import { LoginHandlerType } from "./Login";

const GoogleLogin = () => {
  return (
    <LayoutLoginButton className="bg-[#EFEFEF]">
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
