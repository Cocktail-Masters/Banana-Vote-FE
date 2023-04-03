"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import nextArrow from "@assets/icons/nextArrow.svg";
import nextDoubleArrow from "@assets/icons/nextDoubleArrow.svg";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({
  total_page = 0,
  splitSize = 10,
  nowPageIndex,
  setNowPageIndex,
}: {
  total_page?: number;
  splitSize?: number;
  nowPageIndex: number;
  setNowPageIndex?: Dispatch<SetStateAction<number>>;
}) => {
  // const [nowPage, setNowPage] = useState(0);
  const isMinWidth768 = useMediaQuery("(max-width: 768px)");
  const pageNumber = isMinWidth768 ? Math.floor(splitSize / 2) : splitSize;
  const startPage = nowPageIndex - (nowPageIndex % pageNumber);
  const viewPageList =
    startPage + pageNumber > total_page ? total_page % pageNumber : pageNumber;
  const pageList = new Array(viewPageList)
    .fill(null)
    .map((_, index) => startPage + index);

  const router = useRouter();
  const searchParams = useSearchParams()!;
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const nextButtonHandler = (addNumber: number) => {
    console.log("동작함??");
    const checkValid = (v: number) => {
      if (v < 0) return 0;
      if (v >= total_page) return total_page - 1;
      return v;
    };
    const newPath =
      pathname +
      "?" +
      createQueryString("page", String(checkValid(nowPageIndex + addNumber)));
    console.log("asdf", newPath, nowPageIndex);
    router.push(newPath);

    // setNowPageIndex((v) => checkValid(v + addNumber));
  };

  return (
    <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <nav
        className="isolate inline-flex items-center justify-center gap-[5px] -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-gray-200"
          onClick={() => {
            nextButtonHandler(-10);
          }}
        >
          <Image
            className={"mr-1 h-10 w-6"}
            src={nextDoubleArrow}
            alt={"left double arrow"}
          />
        </div>
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-gray-200"
          onClick={() => {
            nextButtonHandler(-1);
          }}
        >
          <Image
            className={"mr-1 h-5 w-5"}
            src={nextArrow}
            alt={"left arrow"}
          />
        </div>
        {pageList.map((index) => (
          <a
            key={index}
            href="#"
            aria-current="page"
            className={
              nowPageIndex === index
                ? "relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                : "relative inline-flex h-10 w-10 items-center justify-center rounded-full  text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            }
            onClick={() => {
              nextButtonHandler(index - nowPageIndex);
            }}
          >
            {index + 1}
          </a>
        ))}
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-gray-200"
          onClick={() => {
            nextButtonHandler(1);
          }}
        >
          <Image
            className={"ml-1 h-5 w-5 rotate-180"}
            src={nextArrow}
            alt={"right arrow"}
          />
        </div>
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-gray-200"
          onClick={() => {
            nextButtonHandler(10);
          }}
        >
          <Image
            className={"ml-1 h-10 w-6 rotate-180"}
            src={nextDoubleArrow}
            alt={"right double arrow"}
          />
        </div>
      </nav>
    </div>
  );
};

export default Pagination;
