/**
 * @author mingyu
 * @description 피드 오른쪽 상단 메뉴
 */
import { MenuProps } from "@/types";
import { MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

const FeedMenuList = ({ list }: { list: MenuProps[] }) => {
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
