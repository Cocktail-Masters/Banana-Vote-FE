/**
 * @author JSC
 * @description 랜덤한 ranking dummy data 생성 및 반환
 */

import { NextResponse } from "next/server";
import { nanoid } from "nanoid";

const totalPage = 12;

const rankingList = new Array(115)
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
  totalPage,
  ranking_list: rankingList,
};

type getRankingFromApiType = {
  seasonId?: string | null;
  pageNum?: string | null;
  pageSize?: string | null;
  nickname?: string | null;
};

export const getRankingFromApi = ({
  seasonId,
  nickname,
  pageNum = "0",
  pageSize = "10",
}: getRankingFromApiType) => {
  if (!!nickname && !!pageSize) {
    const index = data.ranking_list.map((v) => v.nickname).indexOf(nickname);
    const nowPage = Math.floor(index / Number(pageSize));
    const start = index - (index % Number(pageSize));
    const end = start + Number(pageSize);
    const newData = {
      ...data,
      nowPage: nowPage,
      start,
      end,
      ranking_list: data.ranking_list
        .map((v) => ({
          ...v,
          nickname: `${seasonId}_` + v.nickname,
        }))
        .slice(start, end),
    };
    return newData;
  } else {
    const start = Number(pageNum) * Number(pageSize);
    const end = start + Number(pageSize);
    const newData = {
      ...data,
      ranking_List: data.ranking_list
        .map((v) => ({ ...v, nickname: `${seasonId}_` + v.nickname }))
        .slice(start, end),
    };
    return newData;
  }
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const seasonId = searchParams.get("season_id");
  const pageNum = searchParams.get("page_num");
  const pageSize = searchParams.get("page_size");
  const nickname = searchParams.get("nickname");
  const result = getRankingFromApi({
    seasonId,
    pageNum,
    pageSize,
    nickname,
  });
  return NextResponse.json(result);
}
