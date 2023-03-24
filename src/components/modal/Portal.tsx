"use client";
import React, { ReactElement, useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: { children: ReactElement }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);

    document.body.style.cssText = `
    // position: fixed; 
    // top: -${window.scrollY}px;
    // overflow-y: scroll;
    // width: 100%;`;

    return () => {
      setMounted(false);
      // const scrollY = document.body.style.top;
      // document.body.style.cssText = "";
      // window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  if (typeof window === "undefined") return <></>;
  return mounted ? (
    createPortal(children, document.getElementById("modal-root") as HTMLElement)
  ) : (
    <></>
  );
};

export default Portal;
