"use client";
import React, { useCallback, useEffect, useState } from "react";
import Logo from "@assets/icons/logo.svg";
import Image from "next/image";
import "./LayoutHeader.style.css";
import Link from "next/link";
import LayoutSidebar from "@/components/header/LayoutSideBar";
import HamburgerMenuButton from "../animation/HamburgerMenuButton";
import LayoutTopBar from "./LayoutTopBar";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import useTranslation from "@/hooks/useTranslation";
import LoginModal from "../login/LoginModal";
import Login from "../login/Login";
import { useMainStore } from "@/store";
import { useStore } from "@/hooks/useStore";
import { userSliceType } from "@/store/slices/user";
import { userType } from "@/types";

export type tabType = {
  label: string;
  path: string;
};

const LayoutHeader = () => {
  const minWidth650 = useMediaQuery("(min-width:960px)");
  const { translation } = useTranslation();
  const tabs: tabType[] = [
    { label: translation("header.vote_list"), path: "/home" },
    { label: translation("header.popular"), path: "/vote/popular" },
    { label: translation("header.event"), path: "/event" },
    { label: translation("header.store"), path: "/store" },
    { label: translation("header.ranking"), path: "/ranking" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const user = useStore(useMainStore, (state) => state);

  const closer = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen && minWidth650) setIsOpen(false);
  }, [isOpen, minWidth650]);

  const logoutHandler = () => {
    if (user !== undefined) {
      const logoutUserInfo: userType = {
        id: 0,
        nickname: "",
        age: 0,
        gender: "",
        ranking: 0,
        badgeImageUrl: "",
        percentage: 0.0,
        accessToken: "",
        refreshToken: "",
      };
      user.setIsLogin(false);
      user.setUserInfo(logoutUserInfo);
    }
  };

  return (
    <>
      <div
        className="absolute top-0 left-0 z-10 h-full w-full bg-bg-header-dark bg-opacity-70 dark:bg-opacity-90 "
        style={{
          visibility: isOpen ? "visible" : "hidden",
          opacity: isOpen ? 1 : 0,
        }}
        onClick={() => setIsOpen(false)}
      />
      <div className="flex h-[90px] w-full select-none items-center justify-between">
        <div className="p-1">
          <Link href={"/home"}>
            <Image src={Logo} alt={"banana vote logo"} />
          </Link>
        </div>
        <div className="invisible relative flex h-full w-full flex-row items-center p-0 text-2xl lg:visible">
          <LayoutTopBar tabs={tabs} />
        </div>
        {user !== undefined && user.isLogin ? (
          <button className="h-7 w-24" onClick={logoutHandler}>
            로그아웃
          </button>
        ) : (
          <LoginModal>
            <Login />
          </LoginModal>
        )}

        <div className="visible relative z-[110] m-3 cursor-pointer p-1 	lg:invisible lg:absolute">
          <HamburgerMenuButton
            isOpen={isOpen}
            strokeWidth={5}
            width={24}
            height={24}
            onClick={() => {
              setIsOpen((v) => !v);
            }}
          />
        </div>
      </div>
      <LayoutSidebar
        tabs={tabs}
        isOpen={isOpen}
        closer={closer}
      ></LayoutSidebar>
    </>
  );
};

export default LayoutHeader;
