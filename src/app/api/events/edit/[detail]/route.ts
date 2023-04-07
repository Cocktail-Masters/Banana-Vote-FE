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
};

export async function GET(request: Request) {
  const { searchParams, pathname } = new URL(request.url);
  const detail = pathname.split("/")[4];
  const result = { ...json, id: detail };
  console.log(result);
  return NextResponse.json(result);
}
