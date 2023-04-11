import { NextResponse } from "next/server";

const json = {
  id: 123456789,
  title: "제목제목제목제목제목제목제목제목",
  content: "contentcontentcontentcontentcontentcontentcontent",
  image_url:
    "https://cdn.pixabay.com/photo/2018/11/14/13/05/mont-hwan-3815215_960_720.jpg",
  end_date: "Fri Apr 07 2023 23:19:48 GMT+0900 (한국 표준시)",
  is_event: true, // "이벤트 여부",
  is_anonymouse: true,
  is_public: true,
  is_closed: false,
  tags: [
    "아무튼 태그임",
    "두번째 태그임",
    "세번째 태그임",
    "네번째 태그임",
    "다섯번째 태그임",
    "여섯번째 태그임",
  ],
  vote_items: [
    {
      id: 1,
      item_number: 1,
      title: "부워먹으셈",
      total_points: 500,
      voted_number: 1,
      iframe_link: "",
      image_url:
        "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg",
    },
    {
      id: 2,
      item_number: 2,
      title: "찍어먹으셈",
      total_points: 1500,
      voted_number: 2,
      iframe_link: "",
      image_url:
        "https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg",
    },
  ],
};

export async function GET(request: Request) {
  const { searchParams, pathname } = new URL(request.url);
  const detail = pathname.split("/")[4];
  const result = { ...json, id: detail };
  return NextResponse.json(result);
}
