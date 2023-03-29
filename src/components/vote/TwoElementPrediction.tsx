import Image from "next/image";
import banana_svg from "@assets/icons/banana_svgrepo.com.svg";
import trophy from "@assets/icons/trophy.svg";
import ranking from "@assets/icons/ranking.svg";
import trophy_pink from "@assets/icons/trophy_pink.svg";
import ranking_pink from "@assets/icons/ranking_pink.svg";
import { calculatePercentage } from "@/common/calculatePercentage";

const TwoElementPrediction = ({
  items,
}: {
  items: {
    number: number;
    total_points: number;
    best_points: number;
  }[];
}) => {
  return (
    <div className={"card mt-8 h-2/4 w-11/12 rounded-2xl bg-[#D9D9D9]"}>
      <div className={`h-5 w-full rounded-t-2xl bg-[#ffd60c]`}></div>
      <div className={`flex h-full w-full p-6`}>
        <div className={`relative flex h-full w-1/2`}>
          <div className={`items-left flex h-full flex-col`}>
            <div className={`flex`}>
              <Image
                src={banana_svg}
                width={20}
                height={20}
                alt={"바나나 포인트 아이콘"}
              ></Image>
              <div className={`ml-1`}>{items[0].total_points}</div>
            </div>
            <div className={`flex`}>
              <Image
                src={trophy}
                width={20}
                height={20}
                alt={"트로피 아이콘"}
              ></Image>
              <div className={`ml-1`}>
                1 :{" "}
                {calculatePercentage({
                  x: items[0].total_points,
                  y: items[0].total_points + items[1].total_points,
                })}
              </div>
            </div>
            <div className={`flex`}>
              <Image
                src={ranking}
                width={20}
                height={20}
                alt={"랭킹 아이콘"}
              ></Image>
              <div className={`ml-1`}>{items[0].best_points}</div>
            </div>
          </div>
          <div
            className={`absolute right-5 top-5 text-2xl font-bold text-[#1E69FF]`}
          >
            1번
          </div>
        </div>
        <div className={`h-4/5 border-l-2 border-gray-500`}></div>
        <div className={`relative flex h-full w-1/2 items-end `}>
          <div className={`flex h-full w-full flex-col items-end`}>
            <div
              className={`absolute left-5 top-5 text-2xl font-bold text-[#E0008E]`}
            >
              2번
            </div>
            <div className={`flex items-center`}>
              <div className={`mr-1`}>{items[1].total_points}</div>
              <Image
                src={banana_svg}
                width={20}
                height={20}
                alt={"바나나 포인트 아이콘"}
              ></Image>
            </div>
            <div className={`flex items-center`}>
              <div className={`mr-1`}>
                1 :
                {calculatePercentage({
                  x: items[1].total_points,
                  y: items[0].total_points + items[1].total_points,
                })}
              </div>
              <Image
                src={trophy_pink}
                width={20}
                height={20}
                alt={"트로피 아이콘"}
              ></Image>
            </div>
            <div className={`flex items-center`}>
              <div className={`mr-1`}>{items[1].best_points}</div>
              <Image
                src={ranking_pink}
                width={20}
                height={20}
                alt={"랭킹 아이콘"}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoElementPrediction;
