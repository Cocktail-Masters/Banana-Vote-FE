/**
 * @author JSC
 * @description 랜덤한 ranking dummy data 생성 및 반환
 */

import { NextResponse } from "next/server";
import { nanoid } from "nanoid";

const total_page = 12;

const ranking_list = new Array(115)
  .fill(null)
  .map((v, index) => {
    return {
      user_id: index + 1,
      ranking: index + 1,
      nickname: `nickname-${index}`,
      score: Math.floor(Math.random() * 100000),
    };
  })
  .sort((a, b) => b.score - a.score)
  .map((v, index) => ({ ...v, ranking: index + 1 }));

const data = {
  total_page,
  ranking_list,
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const season_id = searchParams.get("season_id");
  const page_num = searchParams.get("page_num");
  const page_size = searchParams.get("page_size");
  const nickname = searchParams.get("nickname");

  if (nickname !== null && page_size !== null) {
    const index = data.ranking_list.map((v) => v.nickname).indexOf(nickname);
    const nowPage = Math.floor(index / Number(page_size));
    const start = index - (index % Number(page_size));
    const end = start + Number(page_size);
    const newData = {
      ...data,
      now_page: nowPage,
      start,
      end,
      ranking_list: data.ranking_list
        .map((v) => ({
          ...v,
          nickname: `${season_id}_` + v.nickname,
        }))
        .slice(start, end),
    };
    return NextResponse.json(newData);
  } else {
    const start = Number(page_num) * Number(page_size);
    const end = start + Number(page_size);
    const newData = {
      ...data,
      ranking_list: data.ranking_list
        .map((v) => ({ ...v, nickname: `${season_id}_` + v.nickname }))
        .slice(start, end),
    };
    return NextResponse.json(newData);
  }
}
