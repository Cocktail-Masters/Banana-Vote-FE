/**
 * @author mingyu
 */
"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { debounce } from "lodash";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type voteSearchBarProps = {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
};

const VoteSearchBar = ({ keyword, setKeyword }: voteSearchBarProps) => {
  /**
   * @description 디바운스를 사용해 입력한 keyword에 해당하는 피드를 불러옴
   */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Set Keyword
    setKeyword(e.target.value);
    // Call API
    debouncedCallback(e.target.value);
  };

  // TODO : API 호출
  const debouncedCallback = debounce((value) => {
    console.log(value);
  }, 1000);

  return (
    <div className="m-auto mt-4 mb-4 h-auto w-full rounded-xl bg-white drop-shadow-md">
      {/* 바디 */}
      <div className="flex h-auto flex-col items-center gap-2 p-5">
        {/* 검색창 */}
        <div className="lg:text-md ml-2 flex h-10 w-full items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-500 transition hover:bg-white hover:outline hover:outline-2 hover:outline-terriary-mint focus:bg-white focus:outline focus:outline-2 focus:outline-terriary-mint  md:text-sm">
          <form className="flex w-full">
            <label className="flex h-5 w-11 justify-center">
              <MagnifyingGlassIcon
                className="h-5 w-5"
                onClick={() => alert("Search")}
              />
            </label>
            <input
              type="text"
              value={keyword}
              onChange={(e) => handleInputChange(e)}
              placeholder="검색"
              className="mr-3 h-5 bg-transparent pl-1 pr-1 leading-5 outline-none "
              style={{ width: "calc(100% - 40px)" }}
              onFocus={(e) => {
                const pa1 = e.target.parentNode as Element;
                const pa2 = pa1.parentNode as Element;
                pa2.classList.add("bg-white");
                pa2.classList.add("outline");
                pa2.classList.add("outline-2");
                pa2.classList.add("outline-terriary-mint");
              }}
              onBlur={(e) => {
                const pa1 = e.target.parentNode as Element;
                const pa2 = pa1.parentNode as Element;
                pa2.classList.remove("bg-white");
                pa2.classList.remove("outline");
                pa2.classList.remove("outline-2");
                pa2.classList.remove("outline-terriary-mint");
              }}
            />
          </form>
        </div>
        {/* 필터 */}
        <div className="flex h-10 w-full items-center justify-center bg-yellow-200">
          <p className="flex text-center">{keyword}</p>
        </div>
      </div>
    </div>
  );
};

export default VoteSearchBar;
