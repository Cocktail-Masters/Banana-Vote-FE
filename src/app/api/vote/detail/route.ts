import { NextResponse } from "next/server";
import { voteDetailType } from "@/types";

const voteDetailDummy: voteDetailType[] = [
  {
    vote: {
      id: 0,
      title: "쉽게 쓰여진 투표",
      imageUrl: "",
      content: "아무래도 좋은 투표입니다.",
      isEvent: false,
      isAnonymous: false,
      isPublic: true,
      isClosed: false,
      startDate: "2023-03-28",
      endDate: "2023-04-05",
      hits: 123,
      votedNumber: 1230123,
      opinionNumber: 35,
      tags: [
        {
          id: 1,
          name: "첫번째 태그",
          usedNumber: 1,
        },
        {
          id: 2,
          name: "두번째 태그",
          usedNumber: 1,
        },
        {
          id: 3,
          name: "세번째 태그",
          usedNumber: 2,
        },
        {
          id: 4,
          name: "네번째 태그",
          usedNumber: 6,
        },
        {
          id: 5,
          name: "다섯번째 태그",
          usedNumber: 87,
        },
      ],
    },
    writer: {
      badgeImageUrl: "",
      nickname: "적당한 한국인",
      id: 1,
    },
    voteItems: [
      {
        id: 1,
        itemNumber: 1,
        title: "부워먹으셈",
        totalPoints: 500,
        votedNumber: 1,
        iframeLink: "",
        imageUrl: "",
      },
      {
        id: 2,
        itemNumber: 2,
        title: "찍어먹으셈",
        totalPoints: 1500,
        votedNumber: 2,
        iframeLink: "",
        imageUrl: "",
      },
    ],
  },
  {
    vote: {
      id: 1,
      title: "다음엔 뭐 먹을까요?",
      imageUrl: "https://images.unsplash.com/photo-1579869045374-fd3e4cfea191",
      content: "오늘 메뉴 선택에 고민이 많으신가요? 함께 결정해요!",
      isEvent: false,
      isAnonymous: true,
      isPublic: true,
      isClosed: true,
      startDate: "2023-04-07",
      endDate: "2023-04-14",
      hits: 42,
      votedNumber: 46,
      opinionNumber: 3,
      tags: [
        {
          id: 1,
          name: "첫번째 태그",
          usedNumber: 1,
        },
        {
          id: 2,
          name: "두번째 태그",
          usedNumber: 1,
        },
        {
          id: 3,
          name: "세번째 태그",
          usedNumber: 2,
        },
        {
          id: 4,
          name: "네번째 태그",
          usedNumber: 6,
        },
        {
          id: 5,
          name: "다섯번째 태그",
          usedNumber: 87,
        },
      ],
    },

    writer: {
      badgeImageUrl: "",
      nickname: "Foodie",
      id: 2,
    },

    voteItems: [
      {
        id: 3,
        itemNumber: 1,
        title: "한식",
        totalPoints: 15,
        votedNumber: 10,
        iframeLink: "",
        imageUrl:
          "https://images.unsplash.com/photo-1605297876469-46dd2c2f0ee7",
      },
      {
        id: 4,
        itemNumber: 2,
        title: "양식",
        totalPoints: 20,
        votedNumber: 8,
        iframeLink: "",
        imageUrl:
          "https://images.unsplash.com/photo-1616548380076-eb0f253b37a5",
      },
      {
        id: 5,
        itemNumber: 3,
        title: "중식",
        totalPoints: 8,
        votedNumber: 12,
        iframeLink: "",
        imageUrl:
          "https://images.unsplash.com/photo-1586046188519-fd9b175b47a5",
      },
      {
        id: 6,
        itemNumber: 4,
        title: "일식",
        totalPoints: 13,
        votedNumber: 10,
        iframeLink: "",
        imageUrl:
          "https://images.unsplash.com/photo-1588595280408-d42f7e8276a3",
      },
      {
        id: 7,
        itemNumber: 5,
        title: "기타",
        totalPoints: 5,
        votedNumber: 6,
        iframeLink: "",
        imageUrl: "",
      },
    ],
  },
  {
    vote: {
      id: 2,
      title: "다음 달 꽃 구매할 때 어디서 살까요?",
      imageUrl: "https://images.unsplash.com/photo-1523348837742-86dbb8a8d127",
      content: "다음 달에 살 꽃들을 어디서 살까요? 함께 의논해봅시다!",
      isEvent: false,
      isAnonymous: false,
      isPublic: true,
      isClosed: false,
      startDate: "2023-04-09",
      endDate: "2023-04-16",
      hits: 35,
      votedNumber: 29,
      opinionNumber: 5,
      tags: [
        {
          id: 1,
          name: "첫번째 태그",
          usedNumber: 1,
        },
        {
          id: 2,
          name: "두번째 태그",
          usedNumber: 1,
        },
        {
          id: 3,
          name: "세번째 태그",
          usedNumber: 2,
        },
        {
          id: 4,
          name: "네번째 태그",
          usedNumber: 6,
        },
        {
          id: 5,
          name: "다섯번째 태그",
          usedNumber: 87,
        },
      ],
    },

    writer: {
      badgeImageUrl: "",
      nickname: "꽃집 주인",
      id: 3,
    },

    voteItems: [
      {
        id: 8,
        itemNumber: 1,
        title: "온라인 쇼핑몰",
        totalPoints: 12,
        votedNumber: 9,
        iframeLink: "",
        imageUrl:
          "https://images.unsplash.com/photo-1602406711708-722369a73ee6",
      },
      {
        id: 9,
        itemNumber: 2,
        title: "꽃집",
        totalPoints: 17,
        votedNumber: 11,
        iframeLink: "",
        imageUrl:
          "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      },
      {
        id: 10,
        itemNumber: 3,
        title: "온라인 쇼핑몰 + 꽃집",
        totalPoints: 8,
        votedNumber: 6,
        iframeLink: "",
        imageUrl: "https://images.unsplash.com/photo-1556228722-dcaaec2f67bd",
      },
      {
        id: 11,
        itemNumber: 4,
        title: "대형 마트",
        totalPoints: 9,
        votedNumber: 3,
        iframeLink: "",
        imageUrl:
          "https://images.unsplash.com/photo-1570114600079-22f6c2e6dade",
      },
      {
        id: 12,
        itemNumber: 5,
        title: "종합 백화점",
        totalPoints: 5,
        votedNumber: 0,
        iframeLink: "",
        imageUrl:
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
