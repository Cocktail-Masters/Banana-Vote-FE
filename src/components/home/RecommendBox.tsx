"use client";

/**
 * @author mingyu
 */
import Link from "next/link";

type recommendContents = {
  vote_id: number;
  vote_title: string;
  n_view: number;
  n_prediction: number;
};

type recommendBoxProps = {
  contents?: recommendContents[];
};

const RecommendBox = ({ contents }: recommendBoxProps) => {
  return (
    <div className="h-full w-full">
      {!contents || contents.length === 0 ? (
        <p className="mb-10 flex h-32 items-center justify-center font-semibold">
          글이 없습니다.
        </p>
      ) : (
        contents.map((content: recommendContents) => {
          return (
            <div className="mb-2" key={content.vote_id}>
              <Link href={`/vote/detail/${content.vote_id}`} passHref>
                <p className="truncate hover:text-blue-500 hover:decoration-solid">
                  {content.vote_title}
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
