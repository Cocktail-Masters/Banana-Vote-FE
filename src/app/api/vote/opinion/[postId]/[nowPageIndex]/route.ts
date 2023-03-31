import { NextResponse } from "next/server";

import { opinionTypes } from "@/types";

export const DummyComments: opinionTypes = {
  opinions: [
    {
      writer: {
        badge_image_url: "",
        id: 1,
        nickname: "string",
      },
      content: "댓글이지롱",
      agreed_number: 300,
      disagreed_number: 1,
      id: 1,
      created_date: "2023-03-23",
    },
    {
      writer: {
        badge_image_url: "",
        id: 2,
        nickname: "두번째",
      },
      content: "eot",
      agreed_number: 299,
      disagreed_number: 3,
      id: 2,
      created_date: "2023-03-24",
    },
    {
      writer: {
        badge_image_url: "",
        id: 1,
        nickname: "string",
      },
      content: "댓글이지",
      agreed_number: 250,
      disagreed_number: 1,
      id: 3,
      created_date: "2023-03-25",
    },
    {
      writer: {
        badge_image_url: "",
        id: 1,
        nickname: "네번째",
      },
      content: "댓글",
      agreed_number: 144,
      disagreed_number: 1,
      id: 4,
      created_date: "2023-03-21",
    },
    {
      writer: {
        badge_image_url: "",
        id: 1,
        nickname: "다섯번째",
      },
      content: "댓",
      agreed_number: 144,
      disagreed_number: 1,
      id: 5,
      created_date: "2023-03-20",
    },
    {
      writer: {
        badge_image_url: "",
        id: 1,
        nickname: "strinㅁㄴㅇㅎg",
      },
      content: "댓?",
      agreed_number: 144,
      disagreed_number: 1,
      id: 6,
      created_date: "2023-02-15",
    },
    {
      writer: {
        badge_image_url: "",
        id: 1,
        nickname: "stringㅎㅎㅎㅎㅎㅎㅎㅎ",
      },
      content: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
      agreed_number: 144,
      disagreed_number: 1,
      id: 7,
      created_date: "2023-04-20",
    },
    {
      writer: {
        badge_image_url: "",
        id: 1,
        nickname: "222222",
      },
      content: "댓ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",
      agreed_number: 144,
      disagreed_number: 1,
      id: 8,
      created_date: "2023-01-12",
    },
  ],
  isLast: true,
  endPageIndex: 1,
  best: [1, 2, 3],
};

export async function GET(request: Request) {
  const { searchParams, pathname } = new URL(request.url);
  const path = pathname.split("/");
  const voteId = path[4];
  const nowPageIndex = path[5];
  const sortOption = searchParams.get("sort-option");
  if (sortOption == "agree") {
    DummyComments.opinions.sort(function (a, b) {
      return (
        b.agreed_number -
        b.disagreed_number -
        (a.agreed_number - a.disagreed_number)
      );
    });
  } else if (sortOption == "recent") {
    DummyComments.opinions.sort(function (a, b) {
      let dateA = new Date(a.created_date).getTime();
      let dateB = new Date(b.created_date).getTime();
      return dateA - dateB;
    });
  }
  return NextResponse.json(DummyComments);
}

