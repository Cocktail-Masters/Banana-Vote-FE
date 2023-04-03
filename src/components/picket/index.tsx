"use client";
import Loading from "@/components/Loading";
import { usePicketQuery } from "@/hooks/reactQuery/usePicketQuery";
import Carousel from "./Carousel";
import PicketAreaModal from "./PicketModal";

const PicketArea = () => {
  const { data } = usePicketQuery({
    queryKey: "picket",
    voteId: 1,
  });
  return (
    <div
      className={`flex h-[350px] w-full flex-col items-center justify-center`}
    >
      <div
        className={`mb-[15px] flex h-[25px] w-full items-center justify-between`}
      >
        <div className={`p-[3%] text-center text-2xl font-extrabold`}>
          선거 운동
        </div>
        {data !== undefined && (
          <div className={`mr-[10px] p-[10px]`}>
            <PicketAreaModal pickets={data?.pickets} />
          </div>
        )}
      </div>
      <div className={`flex h-[225px] w-[100%] max-w-[1200px] p-[1%]`}>
        <div
          className={`relative  block h-[225px] max-h-[200px] w-[100%] overflow-hidden rounded-2xl bg-[#D9D9D9] shadow-md`}
        >
          {data !== undefined && <Carousel pickets={data?.pickets} />}
        </div>
      </div>
    </div>
  );
};

export default PicketArea;
