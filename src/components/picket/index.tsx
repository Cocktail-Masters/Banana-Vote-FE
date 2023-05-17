"use client";
import Loading from "@/components/Loading";
import { usePicketQuery } from "@/hooks/reactQuery/usePicketQuery";
import useTranslation from "@/hooks/useTranslation";
import Carousel from "./Carousel";
import PicketAreaModal from "./PicketModal";
import { useParams } from "next/navigation";

const PicketArea = () => {
  const params = useParams();
  const { data } = usePicketQuery({
    queryKey: "picket",
    voteId: parseInt(params.detail),
  });
  console.log(params.detail);
  const { translation } = useTranslation();

  return (
    <div
      className={`flex h-[350px] w-full flex-col items-center justify-center`}
    >
      <div
        className={`mb-[15px] flex h-[25px] w-full items-center justify-between`}
      >
        <div
          className={`p-[2%] text-center text-xl font-extrabold transition-colors duration-300 dark:text-text-normal-dark`}
        >
          {translation("vote.detail.picket_area.electioneering")}
        </div>
        {data !== undefined && (
          <div className={`mr-[10px] p-[10px]`}>
            <PicketAreaModal pickets={data?.pickets} />
          </div>
        )}
      </div>
      <div className={`flex h-[225px] w-[100%] max-w-[1200px] p-[1%]`}>
        <div
          className={`relative block h-[225px] max-h-[200px] w-[100%] overflow-hidden rounded-2xl bg-[#D9D9D9] shadow-md dark:bg-bg-feed-dark`}
        >
          {data !== undefined && <Carousel pickets={data?.pickets} />}
        </div>
      </div>
    </div>
  );
};

export default PicketArea;
