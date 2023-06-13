import PageTitle from "@/components/common/PageTitle";
import { getDictionary } from "get-dictionary";
import MypageSection from "./mypageSection";

const Mypage = ({ params: { lng } }: { params: { lng: string } }) => {
  const { messages } = getDictionary(lng);
  return (
    <div className="flex flex-col items-start justify-center xl:justify-between">
      <PageTitle title={messages.mypage.mypage} />
      <MypageSection />
    </div>
  );
};

export default Mypage;
