import { predictionType } from "@/types";
import { NextResponse } from "next/server";

export let voteCheckDummy: predictionType = {
  is_participation: false,
  vote_item_id: 0,
  point: 0,
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const detail = searchParams.get("vote_id");

  console.log("voteCheck", detail);

  const res = voteCheckDummy;

  return NextResponse.json({ res });
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log("test request", body);
  // voteCheckDummy = { is_participation, vote_item_id, point };
  // console.log("vote  OK? ", voteCheckDummy);
  return NextResponse.json({ message: "OK" });
}
