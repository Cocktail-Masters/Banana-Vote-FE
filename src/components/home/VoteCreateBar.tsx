"use client";

/**
 * @author mingyu
 * @description 투표 생성으로 이동하는 바
 */

import { Box, Button, Card, CardBody, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import BadgeImage from "../common/BadgeImage";
import TCard from "./../common/TCard";

type voteCreateBarProps = {
  nickname: string;
  badge_url: string | undefined;
};

const VoteCreateBar = ({ nickname, badge_url }: voteCreateBarProps) => {
  return (
    <div className="w-[90%] lg:w-[800px] m-auto h-[80px] mt-4 mb-4 bg-white rounded-xl drop-shadow-md">
      {/* 바디 */}
      <div className="p-4 flex justify-between items-center h-full">
        {/* 뱃지 */}
        <div className="flex mr-2 h-full justify-center items-center">
          <BadgeImage nickname={nickname} badge_url={badge_url} />
        </div>
        {/* 투표 생성 버튼 */}
        <div className="flex w-full h-full justify-center items-center">
          <Link className="w-full" href="/vote/create" passHref>
            <button className="w-full h-10 bg-gray-100 rounded-full text-gray-500 font-semibold text-xs md:text-sm lg:text-md hover:bg-gray-200 transition">
              원하는 투표를 만들어보세요
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VoteCreateBar;
