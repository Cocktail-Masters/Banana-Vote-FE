/**
 * @author mingyu
 * @description Scroll To Top Button
 */
"use client";
import React, { useCallback, useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    if (window === undefined) return; // Use window object in Next.js

    console.log("scrolly => " + window.scrollY);
    console.log(window);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className={`fixed bottom-10 right-10 rounded-full bg-secondary-dark-orange p-5 text-xs font-medium uppercase leading-tight text-white opacity-75 shadow-md transition duration-150 ease-in-out hover:bg-secondary-orange hover:shadow-lg focus:outline-none focus:ring-0 active:bg-secondary-orange active:shadow-lg`}
        id="scroll-to-top"
        onClick={scrollToTop}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          className="h-6 w-6"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
          ></path>
        </svg>
      </button>
    </>
  );
};

export default ScrollToTopButton;
