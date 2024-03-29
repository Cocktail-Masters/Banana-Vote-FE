/**
 * @author mingyu
 */
import useTranslation from "@/hooks/useTranslation";
import { popularType, popularTypes } from "@/types";
import Link from "next/link";

const RecommendBox = ({ votes }: popularTypes) => {
  const { translation } = useTranslation();

  return (
    <div className="h-full w-full">
      {!votes || votes.length === 0 ? (
        <p className="mb-10 flex h-32 items-center justify-center font-semibold">
          {translation("home.recommend_box.no_recommend_list")}
        </p>
      ) : (
        votes.map((content: popularType) => {
          return (
            <div className="mb-2" key={content.id}>
              <Link href={`/vote/detail/${content.id}`} passHref>
                <p className="recommend-title truncate hover:text-blue-500 hover:decoration-solid">
                  {content.title}
                </p>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};

export default RecommendBox;
