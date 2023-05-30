import Image from "next/image";
import githubMark from "@assets/icons/login/github.svg";
import LayoutLoginButton from "./LayoutLoginButton";
import LogoTitle from "./LogoTitle";
import { LoginHandlerType } from "./Login";

const GithubLogin = ({
  onClickHandler,
}: {
  onClickHandler: LoginHandlerType;
}) => {
  return (
    <LayoutLoginButton className="bg-[#161B22]" onClickHandler={onClickHandler}>
      <Image
        className="ml-3 mr-2 text-white"
        width={30}
        src={githubMark}
        alt={"github login mark"}
      />
      <LogoTitle title={"github"} className={"text-white"} />
    </LayoutLoginButton>
  );
};
export default GithubLogin;
