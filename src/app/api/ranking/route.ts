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

type getRankingFromApiType = {
  season_id?: string | null;
  page_num?: string | null;
  page_size?: string | null;
  nickname?: string | null;
};

export const getRankingFromApi = ({
  season_id,
  nickname,
  page_num = "0",
  page_size = "10",
}: getRankingFromApiType) => {
  if (!!nickname && !!page_size) {
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
    return newData;
  } else {
    const start = Number(page_num) * Number(page_size);
    const end = start + Number(page_size);
    const newData = {
      ...data,
      ranking_list: data.ranking_list
        .map((v) => ({ ...v, nickname: `${season_id}_` + v.nickname }))
        .slice(start, end),
    };
    return newData;
  }
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const season_id = searchParams.get("season_id");
  const page_num = searchParams.get("page_num");
  const page_size = searchParams.get("page_size");
  const nickname = searchParams.get("nickname");
  const a = getRankingFromApi({
    season_id,
    page_num,
    page_size,
    nickname,
  });
  return NextResponse.json(a);
}
