import { predictionType } from "@/types";
import { NextResponse } from "next/server";

export let voteCheckDummy: predictionType = {
  voteItemId: 0,
  point: 0,
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const detail = searchParams.get("vote_id");

  const res = voteCheckDummy;

  return NextResponse.json({ res });
}

export async function POST(request: Request) {
  const body = await request.json();
  voteCheckDummy = body;
  return NextResponse.json({ message: "OK" });
}
