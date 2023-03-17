/**
 * @author mingyu
 * @description 투표 생성으로 이동하는 바
 */

import { Box, Button, Card, CardBody, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import BadgeImage from "../common/BadgeImage";

type voteCreateBarProps = {
	nickname: string;
	badge_url?: string;
};

const VoteCreateBar = ({ nickname, badge_url }: voteCreateBarProps) => {
	return (
		<Card margin={"auto"} width={{ base: "90%", lg: "800px" }} height={"auto"} mt={4} mb={4}>
			<CardBody width={"100%"} height={"100%"} alignContent="center" justifyContent={"space-between"}>
				<HStack spacing="8px">
					{/* 뱃지 */}
					<BadgeImage nickname={nickname} badge_url={badge_url} />
					{/* 가짜 입력창 */}
					<Box width={"calc(100% - 40px)"}>
						<Link href="/vote/create" passHref>
							<Button borderRadius={"32px"} width={"100%"} color={"gray.500"} fontSize={{ base: "xs", sm: "sm", md: "md" }}> 
								원하는 투표를 만들어보세요
							</Button>
						</Link>
					</Box>
				</HStack>
			</CardBody>
		</Card>
	);
};

export default VoteCreateBar;
