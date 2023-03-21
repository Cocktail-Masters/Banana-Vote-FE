"use client";
/**
 * @author mingyu
 * @description 댓글의 프로필 부분 컴포넌트
 */
import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import BadgeImage from "../common/BadgeImage";

interface OpinionProfileProps {
  image?: string;
  nickname: string;
  date: string;
  isWriter: boolean;
}

const OpinionProfile = ({
  image,
  nickname,
  date,
  isWriter,
}: OpinionProfileProps) => {
  return (
    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
      <BadgeImage badge_url={image} nickname={nickname} isWriter={isWriter} />
      <Box>
        <Flex>
          <Heading fontSize="0.8rem" size="sm" mb={1}>
            <Text>{nickname}</Text>
          </Heading>
        </Flex>
        <Flex fontSize="0.75rem">
          <Text color="gray">{date}</Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default OpinionProfile;
