/**
 * @author mingyu
 * @description 메인페이지에서 보이는 하나의 피드에 대한 컴포넌트
 */
"use client";
import React from "react";
import Image from "next/image";
import {
	Card,
	CardHeader,
	CardBody,
	Button,
	Heading,
	useColorMode,
	MenuButton,
	IconButton,
	Menu,
	Flex,
	Avatar,
	Text,
	Box,
	Stack,
	Spacer,
	StackDivider,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import MB from "@assets/icons/MenuButtonIcon.svg";
import VoteIcon from "@assets/icons/Vote.svg";
import VoteItem from "./VoteItem";
import Bumeok from "@assets/images/bumeok.jpg";
import FeedMenuList from "./FeedMenuList";
import OpinionProfile from "./../user/OpinionProfile";

const Feed = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	const numElements: number = 3;
	const numOpinions: number = 1611;
	const voteNum: number = 146723;

	const menuList = ["신고", "공유"];

	return (
		<>
			<Card margin={"auto"} width={"800px"} height={"auto"}>
				{/* 피드 헤더 */}
				<CardHeader>
					<Flex>
						<Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
							<Avatar name="봉천동 이연복" src="" />
							<Box>
								<Heading fontSize="1rem" size="sm" mb={1}>
									봉천동 이연복
								</Heading>
								<Flex fontSize="0.8rem">
									<Text mr={3}>종료됨</Text>
									<Image src={VoteIcon} alt="vote_icon" style={{ width: "16px" }} />
									<Text>{voteNum.toLocaleString()}</Text>
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
				</CardHeader>
				<Stack divider={<StackDivider />} spacing="2">
					{/* 피드 바디 */}
					<Box onClick={() => alert("Hello")}>
						<CardBody>
							<Heading size="md" mb={5}>
								탕수육은 어떻게 먹어야 하는가
							</Heading>
							<Flex justifyContent={"space-between"}>
								{/* numElements : 요소의 갯수, 카드 너비 계산에 활용 */}
								<VoteItem imageLink={Bumeok} content="당근 부먹 아님?? 부먹은 오래 전부터 유행했던 방식이다." numElements={numElements} />
								<VoteItem content="찍먹이지" numElements={numElements} />
								<VoteItem content="쳐먹" numElements={numElements} />

								{/* 요소의 갯수가 2일때 등장하는 VS */}
								{numElements === 2 && (
									<Text pos={"absolute"} top={"50%"} left={"50%"} transform={"translate(-50%, 0%)"} fontSize={"32px"} fontWeight={"bold"}>
										VS
									</Text>
								)}
							</Flex>
						</CardBody>
					</Box>
					<Box>
						{/* 피드 푸터 */}
						<CardBody>
							<Flex mb={3}>
								<Text fontWeight={"bold"} fontSize="16px">
									공감을 많이 받은 댓글
								</Text>
								<Spacer />
								<Button
									size="sm"
									fontSize="16px"
									height="100%"
									width="120px"
									border="none"
									colorScheme="none"
									color={colorMode === "light" ? "black" : "white"}
								>
									댓글 {numOpinions.toLocaleString()}개 <ChevronRightIcon />
								</Button>
							</Flex>
							<Flex alignItems={"center"}>
								<Flex mr={3}>
									<OpinionProfile name={"신림동 이연복"} isWriter={true} date={"2023-12-22"} />
								</Flex>
								<Flex>
									<Text noOfLines={1}>탕수육은 당연히 부먹이지 test 12345 check</Text>
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
