/**
 * @author mingyu
 * @description 피드 리스트 반환
 * not used
 */
import { NextResponse } from "next/server";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const isTag = searchParams.get("is-tag");
  const isClosed = Boolean(searchParams.get("is-closed"));
  const sortBy = Number(searchParams.get("sort-by"));
  const keyword = searchParams.get("keyword");

  const res = null;
  return NextResponse.json({ res });
}
