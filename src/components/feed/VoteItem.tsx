/**
 * @author mingyu
 * @description 카드 형태로 보여지는 투표항목 하나에 대한 컴포넌트
 */
"use client";
import React from "react";
import { Card, Stack, Text } from "@chakra-ui/react";
import { CardBody } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import defaultImg from "@assets/images/defalut_vote_element_img.png";

type voteFeedItemProps = {
	imageLink?: string | StaticImageData;
	content: string;
};

const VoteItem = ({ imageLink = defaultImg, content }: voteFeedItemProps) => {
	return (
		<Card width={"100%"}>
			<CardBody>
				<div style={{ height: "160px" }}>
					<Image
						src={!imageLink ? defaultImg : imageLink}
						alt="vote element img"
						style={{
							margin: "auto",
							objectFit: "contain",
						}}
					/>
				</div>
				<Stack mt="6" spacing="3">
					<Text textAlign={"center"} noOfLines={1}>
						{content}
					</Text>
				</Stack>
			</CardBody>
		</Card>
	);
};

export default VoteItem;
