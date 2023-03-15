/**
 * @author mingyu
 * @description 피드의 헤더 컴포넌트
 */
"use client";
import { Avatar, Box, Flex, Heading, IconButton, Menu, MenuButton, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import FeedMenuList from "./FeedMenuList";
import VoteIcon from "@assets/icons/Vote.svg";
import MB from "@assets/icons/MenuButtonIcon.svg";
import BadgeImage from "./../common/BadgeImage";

type HeaderContentProps = {
	badge_url?: string;
	nickname: string;
	end_date: string;
	is_closed: boolean;
	n_vote: number;
};

const FeedHeader = ({ badge_url, nickname, end_date, is_closed, n_vote }: HeaderContentProps) => {
	const menuList = [
		{
			id: 1,
			title: "신고",
		},
		{
			id: 2,
			title: "공유",
		},
	];

	/**
	 * @description 투표 종료까지 며칠 남았는지 계산하는 함수
	 * @returns 오늘과 해당 날짜의 일 수 차이
	 */
	const getRemainDates = () => {
		let startDate = new Date().getTime();
		let endDate = new Date(end_date).getTime();
		let diff = endDate - startDate;
		let result = Math.floor(diff / (1000 * 60 * 60 * 24));
		return result;
	};

	return (
		<Flex>
			<Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
				<BadgeImage badge_url={badge_url} nickname={nickname} />
				<Box>
					<Heading fontSize="1rem" size="sm" mb={1}>
						{nickname}
					</Heading>
					<Flex fontSize="0.8rem">
						<Text mr={3}>{is_closed ? "종료됨" : getRemainDates() + "일 남음"}</Text>
						<Image src={VoteIcon} alt="vote_icon" style={{ width: "16px" }} />
						<Text>{n_vote.toLocaleString()}</Text>
					</Flex>
				</Box>
			</Flex>
			<Menu>
				<MenuButton
					as={IconButton}
					colorScheme="gray"
					aria-label="Options"
					variant="outline"
					border="none"
					icon={<Image src={MB} alt="menu_toggle_button" fill style={{ padding: "0.5rem" }} />}
				/>
				<FeedMenuList list={menuList} />
			</Menu>
		</Flex>
	);
};

export default FeedHeader;
