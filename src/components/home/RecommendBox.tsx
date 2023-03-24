"use client";

/**
 * @author mingyu
 */
import Link from "next/link";

type recommendContents = {
  id: number;
  title: string;
};

type recommendBoxProps = {
  contents?: recommendContents[];
};

const RecommendBox = ({ contents }: recommendBoxProps) => {
  return (
    <div className="w-full h-full">
      {!contents || contents.length === 0 ? (
        <p className="flex justify-center items-center font-semibold mb-10 h-32">
          글이 없습니다.
        </p>
      ) : (
        contents.map((content: recommendContents) => {
          return (
            <div className="mb-2" key={content.id}>
              <Link href={`/vote/detail/${content.id}`}>
                <p className="truncate font-bold hover:text-blue-500 hover:decoration-solid">
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
