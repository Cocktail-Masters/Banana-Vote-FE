/**
 * @author mingyu
 */
"use client";
import goldMedal from "@assets/icons/medals/gold.svg";
import silverMedal from "@assets/icons/medals/silver.svg";
import bronzeMedal from "@assets/icons/medals/bronze.svg";
import Image from "next/image";
import { seasonUserType } from "@/types";
import useTranslation from "@/hooks/useTranslation";

const RankingBox = ({ contents }: { contents: seasonUserType[] }) => {
  const { translation } = useTranslation();

  return (
    <div>
      <div className="h-52 w-full p-4 text-text-article dark:text-text-article-dark">
        {!contents || contents.length === 0 ? (
          <p className="flex h-32 justify-center font-bold leading-8">
            {translation("home.ranking_box.no_ranking_list")}
          </p>
        ) : (
          contents.map((content: seasonUserType, index: number) => {
            if (index === 0) {
              return (
                <div className="mb-2" key={content.id}>
                  <div className="flex">
                    <Image
                      src={goldMedal}
                      style={{
                        width: "20px",
                        height: "auto",
                      }}
                      alt={"gold medal"}
                    />
                    <p className="ml-1 truncate text-base font-semibold">
                      {content.nickname}
                    </p>
                  </div>
                </div>
              );
            } else if (index === 1) {
              return (
                <div className="mb-2" key={content.id}>
                  <div className="flex">
                    <Image
                      src={silverMedal}
                      style={{
                        width: "20px",
                        height: "auto",
                      }}
                      alt={"silver medal"}
                    />
                    <p className="ml-1 truncate text-base">
                      {content.nickname}
                    </p>
                  </div>
                </div>
              );
            } else if (index === 2) {
              return (
                <div className="mb-2" key={content.id}>
                  <div className="flex">
                    <Image
                      src={bronzeMedal}
                      style={{
                        width: "20px",
                        height: "auto",
                      }}
                      alt={"bronze medal"}
                    />
                    <p className="ml-1 truncate text-base">
                      {content.nickname}
                    </p>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="mb-2" key={content.id}>
                  <div className="flex">
                    <p className="h-auto w-5 text-center text-base font-bold">
                      {index + 1}
                    </p>
                    <p className="ml-1 truncate">{content.nickname}</p>
                  </div>
                </div>
              );
            }
          })
        )}
      </div>
    </div>
  );
};

export default RankingBox;
