/**
 * @author mingyu
 * @description 피드에서 가장 좋아요가 많은 댓글 1개를 표시하는 컴포넌트
 */
"use client";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import OpinionProfile from "../user/OpinionProfile";
import { opinionType } from "@/types";

// nickname: 글 작성자 닉네임
const BestOpinion = ({ nickname, best_opinion }: { nickname: string; best_opinion: opinionType }) => {
	return (
		<Flex alignItems={"center"}>
			<Flex mr={3}>
				<OpinionProfile nickname={best_opinion.nickname} isWriter={nickname === best_opinion.nickname ? true : false} date={best_opinion.date} />
			</Flex>
			<Flex>
				<Text noOfLines={1}>{best_opinion.content}</Text>
			</Flex>
		</Flex>
	);
};

export default BestOpinion;
