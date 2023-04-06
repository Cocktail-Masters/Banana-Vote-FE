import { NextResponse } from "next/server";
import { voteDetailType } from "@/types";

const voteDetailDummy: voteDetailType[] = [
  {
    vote: {
      id: 0,
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
  },
  {
    vote: {
      id: 1,
      title: "다음엔 뭐 먹을까요?",
      image_url: "https://images.unsplash.com/photo-1579869045374-fd3e4cfea191",
      content: "오늘 메뉴 선택에 고민이 많으신가요? 함께 결정해요!",
      is_event: false,
      is_anonymous: true,
      is_public: true,
      is_closed: false,
      start_date: "2023-04-07",
      end_date: "2023-04-14",
      hits: 42,
      voted_number: 56,
      opinion_number: 3,
      tags: ["음식", "식당", "점심", "저녁", "메뉴"],
    },

    writer: {
      badge_image_url: "",
      nickname: "Foodie",
      id: 2,
    },

    vote_items: [
      {
        id: 3,
        item_number: 1,
        title: "한식",
        total_points: 15,
        voted_number: 10,
        iframe_link: "",
        image_url:
          "https://images.unsplash.com/photo-1605297876469-46dd2c2f0ee7",
      },
      {
        id: 4,
        item_number: 2,
        title: "양식",
        total_points: 20,
        voted_number: 8,
        iframe_link: "",
        image_url:
          "https://images.unsplash.com/photo-1616548380076-eb0f253b37a5",
      },
      {
        id: 5,
        item_number: 3,
        title: "중식",
        total_points: 8,
        voted_number: 12,
        iframe_link: "",
        image_url:
          "https://images.unsplash.com/photo-1586046188519-fd9b175b47a5",
      },
      {
        id: 6,
        item_number: 4,
        title: "일식",
        total_points: 13,
        voted_number: 10,
        iframe_link: "",
        image_url:
          "https://images.unsplash.com/photo-1588595280408-d42f7e8276a3",
      },
      {
        id: 7,
        item_number: 5,
        title: "기타",
        total_points: 5,
        voted_number: 6,
        iframe_link: "",
        image_url: "",
      },
    ],
  },
  {
    vote: {
      id: 2,
      title: "다음 달 꽃 구매할 때 어디서 살까요?",
      image_url: "https://images.unsplash.com/photo-1523348837742-86dbb8a8d127",
      content: "다음 달에 살 꽃들을 어디서 살까요? 함께 의논해봅시다!",
      is_event: false,
      is_anonymous: false,
      is_public: true,
      is_closed: false,
      start_date: "2023-04-09",
      end_date: "2023-04-16",
      hits: 35,
      voted_number: 29,
      opinion_number: 5,
      tags: ["꽃", "플라워", "가게", "꽃집"],
    },

    writer: {
      badge_image_url: "",
      nickname: "꽃집 주인",
      id: 3,
    },

    vote_items: [
      {
        id: 8,
        item_number: 1,
        title: "온라인 쇼핑몰",
        total_points: 12,
        voted_number: 9,
        iframe_link: "",
        image_url:
          "https://images.unsplash.com/photo-1602406711708-722369a73ee6",
      },
      {
        id: 9,
        item_number: 2,
        title: "꽃집",
        total_points: 17,
        voted_number: 11,
        iframe_link: "",
        image_url:
          "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      },
      {
        id: 10,
        item_number: 3,
        title: "온라인 쇼핑몰 + 꽃집",
        total_points: 8,
        voted_number: 6,
        iframe_link: "",
        image_url: "https://images.unsplash.com/photo-1556228722-dcaaec2f67bd",
      },
      {
        id: 11,
        item_number: 4,
        title: "대형 마트",
        total_points: 9,
        voted_number: 3,
        iframe_link: "",
        image_url:
          "https://images.unsplash.com/photo-1570114600079-22f6c2e6dade",
      },
      {
        id: 12,
        item_number: 5,
        title: "종합 백화점",
        total_points: 5,
        voted_number: 0,
        iframe_link: "",
        image_url:
          "https://images.unsplash.com/photo-1529253544131-1286b0d98665",
      },
    ],
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const detail = searchParams.get("vote_id");
  const result = await voteDetailDummy.filter((e) => {
    if (detail !== undefined && detail !== null) {
      console.log("detail???????", parseInt(detail) % 3);
      return parseInt(detail) % 3 == e.vote.id;
    }
  });
  console.log("result", result);
  const res = result[0];

  return NextResponse.json({ res });
}
