/**
 * @author mingyu
 * @description 피드의 제목 부분
 */

import { Heading } from "@chakra-ui/react";
import React from "react";

const FeedTitle = ({ content }: { content: string }) => {
	return (
		<Heading size="md" mb={5}>
			{content}
		</Heading>
	);
};

export default FeedTitle;
