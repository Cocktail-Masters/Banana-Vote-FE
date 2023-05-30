import { NextResponse } from "next/server";
import { DummyComments } from "./[postId]/[nowPageIndex]/route";

export async function POST(request: Request) {
  const body = await request.json();
  DummyComments.opinions.push(body);
  return NextResponse.json({ message: "OK" });
}
