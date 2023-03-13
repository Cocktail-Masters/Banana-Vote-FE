"use client";
import React from "react";
import { Card, Stack, Text } from "@chakra-ui/react";
import { CardBody } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { CardFooter } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import defaultImg from "@assets/images/defalut_vote_element_img.png";
import loader from "@assets/icons/loader.svg";

export type voteItemTypes = {
	imageLink?: string | StaticImageData;
	content: string;
	numElements: number;
};

const VoteItem = ({ imageLink = defaultImg, content, numElements }: voteItemTypes) => {
	return (
		<Card width={`${100 / (numElements + 1)}%`}>
			<CardBody>
				<div style={{ height: "160px" }}>
					<Image
						src={imageLink}
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
