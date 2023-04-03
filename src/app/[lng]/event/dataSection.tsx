"use client";
import { useState } from "react";

const EventDataSection = () => {
  const [isEnd, setIsEnd] = useState<boolean>();
  const isIng = () => {
    setIsEnd(true);
  };
  const isNotIng = () => {
    setIsEnd(false);
  };
  return (
    <div className="h-full w-full">
      <div className="mt-3 flex w-full justify-end">
        <button
          className={`mr-2 h-10 w-24 rounded-2xl font-semibold shadow-md hover:bg-secondary-orange active:bg-primary-yellow ${
            isEnd ? `bg-secondary-orange` : `none`
          }`}
          onClick={isIng}
        >
          진행중
        </button>
        <button
          className={`mr-4 h-10 w-24 rounded-2xl font-semibold shadow-md hover:bg-secondary-orange active:bg-primary-yellow ${
            !isEnd ? `bg-secondary-orange` : `none`
          }`}
          onClick={isNotIng}
        >
          종료
        </button>
      </div>
      <div>{isEnd ? <div></div> : <div></div>}</div>
    </div>
  );
};

export default EventDataSection;
