import InputNickname from "@/components/user/InputNickname";
import SelectGender from "@/components/user/SelectGender";
import SelectAge from "@/components/user/SelectAge";
import PageTitle from "@/components/common/PageTitle";
import { getDictionary } from "get-dictionary";

const Home = ({ params: { lng } }: { params: { lng: string } }) => {
  const { messages } = getDictionary(lng);

  return (
    <div className="flex flex-col items-start justify-center xl:justify-between">
      <PageTitle title={messages.mypage.mypage} />
      <InputNickname />
      <SelectGender></SelectGender>
      <SelectAge></SelectAge>
    </div>
  );
};

export default Home;
