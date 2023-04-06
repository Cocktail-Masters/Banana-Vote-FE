/**
 * @author mingyu
 * @description 피드 리스트 반환
 */
import { getFeedList } from "@/hooks/reactQuery/useFeedListQuery";
import { NextResponse } from "next/server";

export function GET(request: Request) {
  const res = getFeedList(0);
  return NextResponse.json({ res });
}
