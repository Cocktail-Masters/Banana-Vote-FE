"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Button, Heading, Divider, useColorMode } from "@chakra-ui/react";

const Feed = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<Card margin={"auto"} width={"800px"} height={"auto"}>
				<CardHeader>
					<Heading size={"md"} noOfLines={1} color={colorMode == "light" ? "Dark" : "Light"}>
						탕수육은 어떻게 먹는게 좋을까
					</Heading>
				</CardHeader>
				<Divider colorScheme={"gray"} size={"2"} variant={"solid"} />
				<CardBody>hello</CardBody>
				<Button onClick={toggleColorMode}>모드 바꾸기</Button>
			</Card>
		</>
	);
};

export default Feed;
