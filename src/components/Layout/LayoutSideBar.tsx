import { Button, Flex, Link, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";
import { tabType } from "./LayoutHeader";

const LayoutSideBar = ({
  isOpen,
  tabs,
}: {
  isOpen: boolean;
  tabs: tabType[];
}) => {
  const pathname = usePathname();

  const [selectedTabPath, setSelectedTabPath] = useState<string | null>(null);
  useEffect(() => {
    setSelectedTabPath(pathname);
  }, [pathname]);

  return (
    <>
      <Flex
        position={"absolute"}
        flexGrow={{ base: "none", lg: 1 }}
        display={{ base: "flex", lg: "none" }}
        justifyContent={"center"}
        top={0}
        right={0}
        gap={"30px"}
        h={"100%"}
        w={"80%"}
        flexDirection={"column"}
        background={"#d9d9d9"}
        zIndex={99}
        transform={isOpen ? "translate(0%)" : "translate(100%)"}
        transitionDuration={"200ms"}
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
        <Flex p={3}>마이페이지</Flex>
      </Flex>
    </>
  );
};
export default React.memo(LayoutSideBar);
