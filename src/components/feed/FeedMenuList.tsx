/**
 * @author mingyu
 * @description 피드 오른쪽 상단 메뉴
 */
import { MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

interface MenuProps {
	id: number;
	title: string;
}

interface MenuListProps {
	list: MenuProps[];
}

const FeedMenuList = ({ list }: MenuListProps) => {
	const onMenuClickHandler = (menuId: number) => {
		alert("개발중입니다." + menuId);
	};

	return (
		<MenuList>
			{list.map((item: MenuProps, index: number) => {
				return (
					<MenuItem key={item.id} onClick={() => onMenuClickHandler(item.id)}>
						{item.title}
					</MenuItem>
				);
			})}
		</MenuList>
	);
};

export default FeedMenuList;
