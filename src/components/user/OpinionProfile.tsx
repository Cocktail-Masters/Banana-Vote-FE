import { Avatar, AvatarBadge, Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface OpinionProfileProps {
	image?: string;
	nickname: string;
	date: string;
	isWriter: boolean;
}

const OpinionProfile = ({ image, nickname, date, isWriter }: OpinionProfileProps) => {
	return (
		<Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
			<Avatar name={!image || image.length < 1 ? null : nickname} src={image}>
				{isWriter && <AvatarBadge boxSize="1.25em" bg="green.500" />}
			</Avatar>
			<Box>
				<Flex>
					<Heading fontSize="0.8rem" size="sm" mb={1}>
						<Text>{nickname}</Text>
					</Heading>
				</Flex>
				<Flex fontSize="0.75rem">
					<Text color="gray">{date}</Text>
				</Flex>
			</Box>
		</Flex>
	);
};

export default OpinionProfile;
