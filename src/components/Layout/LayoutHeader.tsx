"use client";

import React, { useEffect, useState } from "react";
import Logo from "@assets/icons/logo.svg";
import Image from "next/image";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./LayoutHeader.style.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LayoutSidebar from "@components/Layout/LayoutSideBar";

type tabType = {
  label: string;
  path: string;
};

export const HeaderTabs = ({ tabs }: { tabs: tabType[] }) => {
  const pathname = usePathname();

  const [selectedTabPath, setSelectedTabPath] = useState<string | null>(null);
  useEffect(() => {
    setSelectedTabPath(pathname);
  }, [pathname]);

  return (
    <>
      <Flex
        flexGrow={{ base: "none", xl: 1 }}
        justifyContent={"center"}
        gap={"30px"}
        h={"100%"}
        flexDirection={{ base: "column", lg: "row" }}
      >
        {tabs.map((item) => (
          <Flex
            key={item.label}
            h={"100%"}
            className={item.path === selectedTabPath ? "selected" : ""}
            onClick={() => setSelectedTabPath(item.path)}
            position={"relative"}
          >
            <Flex justifyContent={"center"} h={"100%"} alignItems={"center"}>
              <Link href={item.path}>{`${item.label}`}</Link>
            </Flex>
            <Flex justifyContent={"flex-end"}>
              {item.path === selectedTabPath ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Flex p={3}>마이페이지</Flex>
    </>
  );
};

const LayoutHeader = () => {
  const tabs: tabType[] = [
    { label: "투표목록", path: "/home" },
    { label: "인기투표", path: "/vote/popular" },
    { label: "이벤트", path: "/event" },
    { label: "스토어", path: "/store" },
    { label: "랭킹", path: "/ranking" },
  ];

  const [isLargerThan960] = useMediaQuery("(min-width: 960px)");

  return (
    <>
      {isLargerThan960 && <LayoutSidebar></LayoutSidebar>}
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        h={"90px"}
        w={"100%"}
        borderBottom={"1px solid #CACACA"}
        position={"relative"}
      >
        <Flex p={3}>
          <Link href={"/home"}>
            <Image src={Logo} alt={"banana vote logo"} />
          </Link>
        </Flex>
        <Flex
          p={0}
          fontSize={"28px"}
          h={"100%"}
          w={"100%"}
          alignItems={"center"}
          position={{ base: "absolute", lg: "relative" }}
          flexDirection={{ base: "column", lg: "row" }}
          display={{ base: "none", lg: "flex" }}
        >
          <HeaderTabs tabs={tabs} />
        </Flex>
        <Flex
          position={"absolute"}
          display={{ base: "flex", lg: "none" }}
          top={0}
          right={0}
          w={"80%"}
          h={"100%"}
        >
          <HeaderTabs tabs={tabs} />
        </Flex>
      </Flex>
    </>
  );
};

export default LayoutHeader;
