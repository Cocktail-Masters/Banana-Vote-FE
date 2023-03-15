"use client";
import React from "react";
import Feed from "../../components/feed/Feed";

const page = () => {
	return (
		<div style={{ alignItems: "center", justifyContent: "center" }}>
			{list.map((data, index: number) => {
				return <Feed key={index} data={data} />;
			})}
		</div>
	);
};

const list = [
	{
		nickname: "봉천동 이연복",
		badge_url: "",
		vote_title: "탕수육은 어떻게 먹어야 하는가",
		is_anonymouse: false,
		is_disclosure: false,
		start_date: "2023-03-13 15:38:27",
		end_date: "2023-03-30 15:38:27",
		n_view: 100,
		n_vote: 1245235,
		n_opinion: 11,
		n_reported: 0,
		is_closed: false,
		vote_item: [
			{
				title: "당근 부먹 아님?? 부먹은 오래 전부터 유행했던 방식이다.",
				iframe_link: "",
				image: "",
				candidate_num: 1,
			},
			{
				title: "찍먹이지",
				iframe_link: "",
				image: "",
				candidate_num: 2,
			},
		],
		best_opinion: {
			id: 143,
			nickname: "봉천동 이연복",
			badge_url: "",
			content: "탕수육은 당연히 부먹이지 test 12345 check",
			n_agree: 12512,
			n_disagree: 133,
			n_reported: 1,
			date: "2023-03-13 15:38:27",
		},
	},
	{
		nickname: "봉천동 이연복",
		badge_url: "",
		vote_title: "탕수육은 어떻게 먹어야 하는가",
		is_anonymouse: false,
		is_disclosure: false,
		start_date: "2023-03-13 15:38:27",
		end_date: "2023-03-30 15:38:27",
		n_view: 100,
		n_vote: 432,
		n_opinion: 16111566,
		n_reported: 0,
		is_closed: false,
		vote_item: [
			{
				title: "당근 부먹 아님?? 부먹은 오래 전부터 유행했던 방식이다.",
				iframe_link: "",
				image: "",
				candidate_num: 1,
			},
			{
				title: "찍먹이지",
				iframe_link: "",
				image: "",
				candidate_num: 2,
			},
			{
				title: "쳐먹",
				iframe_link: "",
				image: "",
				candidate_num: 3,
			},
		],
		best_opinion: {
			id: 143,
			nickname: "신림동 이연복",
			badge_url: "",
			content: "탕수육은 당연히 부먹이지 test 12345 check",
			n_agree: 12512,
			n_disagree: 133,
			n_reported: 1,
			date: "2023-03-13 15:38:27",
		},
	},
	{
		nickname: "건설로봇",
		badge_url: "",
		vote_title: "피자 브랜드의 최강자는?",
		is_anonymouse: false,
		is_disclosure: false,
		start_date: "2023-03-13 15:38:27",
		end_date: "2023-03-27 15:38:27",
		n_view: 100,
		n_vote: 432,
		n_opinion: 1611,
		n_reported: 0,
		is_closed: false,
		vote_item: [
			{
				title: "미스터피자",
				iframe_link: "",
				image: "",
				candidate_num: 1,
			},
			{
				title: "피자헛",
				iframe_link: "",
				image: "",
				candidate_num: 2,
			},
			{
				title: "노브랜드피자",
				iframe_link: "",
				image: "",
				candidate_num: 3,
			},
			{
				title: "어깨피자",
				iframe_link: "",
				image: "",
				candidate_num: 4,
			},
			{
				title: "가슴피자",
				iframe_link: "",
				image: "",
				candidate_num: 5,
			},
		],
		best_opinion: {
			id: 1431,
			nickname: "고든 램지",
			badge_url: "",
			content: "고든램지피자 어디감",
			n_agree: 125,
			n_disagree: 133,
			n_reported: 1,
			date: "2023-03-16 15:38:27",
		},
	},
];

export default page;
