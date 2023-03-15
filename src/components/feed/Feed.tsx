/**
 * @author mingyu
 * @description 메인페이지에서 보이는 하나의 피드에 대한 컴포넌트
 */
"use client";
import React from "react";
import { Card, CardHeader, CardBody, Button, Flex, Text, Box, Stack, Spacer, StackDivider, useMediaQuery, useColorModeValue } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import OpinionProfile from "./../user/OpinionProfile";
import FeedHeader from "./FeedHeader";
import VS from "./VS";
import VoteItemList from "./VoteItemList";
import FeedTitle from "./FeedTitle";
import { voteFeedListType } from "@/types";

interface feedProps {
	data: voteFeedListType;
}

const Feed = ({ data }: feedProps) => {
	const [isLargerThan880] = useMediaQuery("(min-width: 880px)");
	const colorMode = useColorModeValue("light", "black"); // 현재 컬러 모드

	const onBodyClickHandler = (id: number) => {
		alert(id);
	};

	const onMoreCommentClickHandler = (id: number) => {
		alert(id);
	};

	return (
		<>
			<Card margin={"auto"} width={isLargerThan880 ? "800px" : "90%"} height={"auto"} mt={4} mb={4}>
				{/* 피드 헤더 */}
				<CardHeader>
					<FeedHeader badge_url={data.badge_url} nickname={data.nickname} end_date={data.end_date} is_closed={data.is_closed} n_vote={data.n_vote} />
				</CardHeader>
				<Stack divider={<StackDivider />} spacing="2">
					{/* 피드 바디 */}
					<Box onClick={() => alert("Hello")}>
						<CardBody>
							{/* 피드 제목 */}
							<FeedTitle content={data.vote_title} />
							{/* 피드 투표 항목들 */}
							<VoteItemList vote_item={data.vote_item} />
							{/* 요소의 갯수가 2일때 등장하는 VS */}
							{data.vote_item.length === 2 && <VS />}
						</CardBody>
					</Box>
					<Box>
						{/* 피드 푸터 */}
						<CardBody>
							<Flex mb={3} pos="relative">
								<Text fontWeight={"bold"} fontSize="16px">
									공감을 많이 받은 댓글
								</Text>
								<Spacer />
								<Button position="absolute" right="0%" fontSize="16px" border="none" colorScheme="none" color={colorMode ? "black" : "white"}>
									댓글 {data.n_opinion.toLocaleString()}개 <ChevronRightIcon />
								</Button>
							</Flex>
							<Flex alignItems={"center"}>
								<Flex mr={3}>
									<OpinionProfile
										nickname={data.best_opinion.nickname}
										isWriter={data.nickname === data.best_opinion.nickname ? true : false}
										date={data.best_opinion.date}
									/>
								</Flex>
								<Flex>
									<Text noOfLines={1}>{data.best_opinion.content}</Text>
								</Flex>
							</Flex>
						</CardBody>
					</Box>
				</Stack>
			</Card>
		</>
	);
};

export default Feed;
