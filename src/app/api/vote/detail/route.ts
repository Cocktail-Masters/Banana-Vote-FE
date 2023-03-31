import { NextResponse } from "next/server";
import { voteDetailType } from "@/types";

const voteDetailDummy: voteDetailType = {
  vote: {
    id: 1,
    title: "쉽게 쓰여진 투표",
    image_url: "",
    content: "아무래도 좋은 투표입니다.",
    is_event: false,
    is_anonymous: false,
    is_public: true,
    is_closed: false,
    start_date: "2023-03-28",
    end_date: "2023-04-05",
    hits: 123,
    voted_number: 1230123,
    opinion_number: 35,
    tags: [
      "아무튼 태그임",
      "두번째 태그임",
      "세번째 태그임",
      "네번째 태그임",
      "다섯번째 태그임",
      "여섯번째 태그임",
    ],
  },
  writer: {
    badge_image_url: "",
    nickname: "적당한 한국인",
    id: 1,
  },
  vote_items: [
    {
      id: 1,
      item_number: 1,
      title: "부워먹으셈",
      total_points: 500,
      voted_number: 1,
      iframe_link: "",
      image_url: "",
    },
    {
      id: 2,
      item_number: 2,
      title: "찍어먹으셈",
      total_points: 1500,
      voted_number: 2,
      iframe_link: "",
      image_url: "",
    },
  ],
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const detail = searchParams.get("vote_id");
  const res = voteDetailDummy;

  return NextResponse.json({ res });
}
