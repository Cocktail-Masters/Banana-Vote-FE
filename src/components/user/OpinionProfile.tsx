import { Avatar, AvatarBadge, Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface OpinionProfileProps {
	image?: string;
	name: string;
	date: string;
	isWriter: boolean;
}

const OpinionProfile = ({ image, name, date, isWriter }: OpinionProfileProps) => {
	return (
		<Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
			<Avatar name={name} src={image ? image : ""}>
				{isWriter && <AvatarBadge boxSize="1.25em" bg="green.500" />}
			</Avatar>
			<Box>
				<Flex>
					<Heading fontSize="1rem" size="sm" mb={1}>
						<Text>{name}</Text>
					</Heading>
				</Flex>
				<Flex fontSize="0.8rem">
					<Text color="gray">{date}</Text>
				</Flex>
			</Box>
		</Flex>
	);
};

export default OpinionProfile;
