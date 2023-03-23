"use client";
import { useFetchComments } from "@/hooks/reactQuery/useCommentsQuery";
import { useState } from "react";
import { opinionType } from "@/types";

const CommentList = ({ opinionType }: { opinionType: "agree" | "recent" }) => {
  const [nowPageIndex, setNowPageIndex] = useState(1);
  const { data, isFetching } = useFetchComments({
    queryKey: "commentList",
    postId: 1,
    nowPageIndex,
    sortOption: opinionType,
  });
  console.log(data);
  return (
    <div className={`relative w-full`}>
      {data !== undefined &&
        data.pages.map((e: { opinions: opinionType[] }, i: number) => (
          <div className={`min-h-[35%] w-full pl-[2%] pr-[2%]`} key={i}>
            {e.opinions.map((element: opinionType, index: number) => (
              <div
                className={`mt-[3%] mb-[3%] h-fit min-h-[125px] w-full rounded-2xl p-2 ${
                  data.pages[0].best !== undefined &&
                  data.pages[0].best.some((e) => {
                    return e === element.id;
                  })
                    ? "bg-[#AEE6E3]"
                    : "bg-[#F9F6ED]"
                } border-["#F9F6ED"] shadow-md`}
                key={index}
              >
                <div className={`flex h-[30%] w-full justify-between `}>
                  <div className={`w-10/12`}>
                    <div className={`font-bold`}>{element.nickname}</div>{" "}
                    <div className={`text-[10px]`}>{element.date}</div>
                  </div>

                  <div className={``}>
                    <div className={`absolute right-[120px]`}>
                      <button className={`flex`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                          />
                        </svg>

                        <div className={`text-xs`}>{element.n_agree}</div>
                      </button>
                    </div>
                    <div className={``}>
                      <button className={`absolute right-[75px] flex`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                          />
                        </svg>

                        <div className={`text-xs`}>{element.n_disagree}</div>
                      </button>
                    </div>
                    <div className={``}>
                      <button className={`text-md absolute right-[30px]`}>
                        🚨
                      </button>
                    </div>
                  </div>
                </div>
                <div className={`text-sm`}>{element.content}</div>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default CommentList;
