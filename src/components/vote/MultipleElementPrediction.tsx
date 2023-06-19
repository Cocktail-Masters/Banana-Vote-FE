import Image from "next/image";
import banana_svg from "@assets/icons/banana_svgrepo.com.svg";
import trophy from "@assets/icons/trophy.svg";
import ranking from "@assets/icons/ranking.svg";
import { calculatePercentage } from "@/common/calculatePercentage";
import { useEffect, useState } from "react";

const MultipleElementPrediction = ({
  items,
}: {
  items: {
    number: number;
    totalPoints: number;
    bestPoints: number;
  }[];
}) => {
  const [totalPoint, setTotalPoint] = useState<number | undefined>(undefined);
  useEffect(() => {
    let point = 0;
    for (const i of items) {
      point += i.totalPoints;
    }
    setTotalPoint(point);
  }, [items]);
  if (totalPoint !== undefined) {
    return (
      <div
        className={
          "card mt-8 h-2/4 w-11/12 rounded-2xl bg-[#D9D9D9] dark:bg-bg-normal-dark"
        }
      >
        <div className={`h-5 w-full rounded-t-2xl bg-[#ffd60c]`}></div>
        <div className={`flex h-full w-full flex-col p-6`}>
          {items.map((e, i) => (
            <div
              key={i}
              className={"flex h-7 w-full items-center justify-center"}
            >
              <div className={"flex-1 text-lg font-semibold text-[#1E69FF]"}>
                {e.number}번
              </div>
              <div className={"flex h-full flex-[2] items-center"}>
                <Image src={banana_svg} alt="바나나 포인트 이미지" width={20} />
                <div className="ml-1 sm:text-xs ">{e.totalPoints}</div>
              </div>
              <div className={"flex h-full flex-[2] items-center"}>
                <Image src={trophy} alt="바나나 포인트 이미지" width={23} />
                <div className="ml-1 sm:text-xs">
                  1 : {calculatePercentage({ x: e.totalPoints, y: totalPoint })}
                </div>
              </div>
              <div className={"flex h-full flex-[2] items-center"}>
                <Image
                  src={ranking}
                  alt="최고로 투자한 사람 이미지"
                  width={20}
                />
                <div className="ml-1 sm:text-xs">{e.bestPoints}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default MultipleElementPrediction;
