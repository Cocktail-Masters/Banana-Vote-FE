/**
 * @author mingyu
 */
import { useRankingTop5Dummy } from "@/components/home/__test__/useRankingTop5Dummy";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = useRankingTop5Dummy;

  return NextResponse.json({ res });
}
