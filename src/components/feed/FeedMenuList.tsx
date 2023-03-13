import { MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

interface MenuListProps {
	list: string[];
}

const FeedMenuList = ({ list }: MenuListProps) => {
	return (
		<MenuList>
			{list.map((item, index: number) => {
				return <MenuItem key={index}>{item}</MenuItem>;
			})}
		</MenuList>
	);
};

export default FeedMenuList;
