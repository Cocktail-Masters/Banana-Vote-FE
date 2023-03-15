/**
 * @author mingyu
 * @description 뱃지 이미지
 */
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import React from "react";

type BadgeProps = {
	badge_url?: string;
	nickname: string;
	isWriter?: boolean;
};

const BadgeImage = ({ badge_url, nickname, isWriter }: BadgeProps) => {
	return (
		<>
			<Avatar name={!badge_url || badge_url.length < 1 ? undefined : nickname} src={badge_url}>
				{isWriter && <AvatarBadge boxSize="1.25em" bg="green.500" />}
			</Avatar>
		</>
	);
};

export default BadgeImage;
