import { useState, useEffect, useMemo, useRef } from "react";
import throttle from "lodash/throttle";

export default function useScrollPercentage(tag = "body") {
  const [isTabnavOn, setIsTabnavOn] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const selectorRef = useRef<HTMLBodyElement | HTMLDivElement | null>(null);

  const throttledScroll = () =>
    throttle(() => {
      if (selectorRef.current === null) return;
      const nextTabnavOn = window.scrollY > selectorRef.current.offsetTop + 50;
      if (nextTabnavOn !== isTabnavOn) {
        setIsTabnavOn(nextTabnavOn);
      }

      setPercentage(
        (window.scrollY /
          (selectorRef.current.scrollHeight -
            selectorRef.current.offsetHeight)) *
          100
      );
      console.log("scrolly => " + window.scrollY);
      console.log("percentage => " + percentage);
      console.log("scrollHeight => " + selectorRef.current.scrollHeight);
      console.log("offsetHeight => " + selectorRef.current.offsetHeight);
      console.log(selectorRef.current);
    }, 100);

  useEffect(() => {
    console.log(selectorRef.current);
    selectorRef.current = window.document.querySelector(tag);
    selectorRef.current &&
      selectorRef.current.addEventListener("scroll", throttledScroll);
    return () => {
      selectorRef.current &&
        selectorRef.current.removeEventListener("scroll", throttledScroll);
    };
  }, [isTabnavOn, tag]);
  return { isTabnavOn, percentage }; // 상단에 붙었는지, 몇퍼센트 스크롤인지
}
