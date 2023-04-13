"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import nextArrow from "@assets/icons/nextArrow.svg";
import nextDoubleArrow from "@assets/icons/nextDoubleArrow.svg";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useCreateQueryString from "@/hooks/useCreateQueryString";
import {
  rankingParamsType,
  rankingRouteCallbackFunctionType,
} from "@/app/[lng]/ranking/[seasonId]/[paginationIndex]/page";
import useRankingRouter from "@/hooks/useRankingRouter";

const Pagination = ({
  total_page = 0,
  splitSize = 10,
  nowPageIndex,
  params,
}: {
  total_page?: number;
  splitSize?: number;
  nowPageIndex: number;
  params: rankingParamsType;
}) => {
  const isMinWidth768 = useMediaQuery("(max-width: 768px)");
  const pageNumber = isMinWidth768 ? Math.floor(splitSize / 2) : splitSize;
  const startPage = nowPageIndex - (nowPageIndex % pageNumber);
  const viewPageList =
    startPage + pageNumber > total_page ? total_page % pageNumber : pageNumber;
  const pageList = new Array(viewPageList)
    .fill(null)
    .map((_, index) => startPage + index);

  const { routeCallbackHandler } = useRankingRouter(params);

  const nextButtonHandler = (addNumber: number) => {
    const checkValid = (v: number) => {
      if (v < 0) return 0;
      if (v >= total_page) return total_page - 1;
      return v;
    };
    routeCallbackHandler({
      newPageIndex: checkValid(nowPageIndex + addNumber),
    });
  };

  const nextButtonCss = `flex h-10 w-10 items-center justify-center rounded-full shadow-md hover:bg-bg-button-yellow dark:text-text-normal-dark dark:shadow-text-normal`;

  return (
    <div className="flex items-center justify-center">
      <nav
        className="isolate inline-flex items-center justify-center gap-[10px] rounded-md"
        aria-label="Pagination"
      >
        <div
          className={`${nextButtonCss}`}
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
          className={`${nextButtonCss}`}
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
                ? "shadow-base relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-bg-button-yellow-light shadow-inner dark:text-text-normal dark:shadow-text-normal"
                : "relative inline-flex h-10 w-10 items-center justify-center rounded-full text-text-normal shadow-md hover:bg-bg-button-yellow dark:text-text-normal-dark dark:shadow-text-normal "
            }
            onClick={() => {
              nextButtonHandler(index - nowPageIndex);
            }}
          >
            {index + 1}
          </a>
        ))}
        <div
          className={`${nextButtonCss}`}
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
          className={`${nextButtonCss}`}
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
