/**
 * @author mingyu
 * @description 피드의 제목 부분
 */

import { Heading } from "@chakra-ui/react";
import React from "react";

interface feedTitleProps {
	content: string;
}

const FeedTitle = ({ content }: feedTitleProps) => {
	return (
		<Heading size="md" mb={5}>
			{content}
		</Heading>
	);
};

export default FeedTitle;
