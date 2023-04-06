/**
 * @author mingyu
 */
import { usePopularListDummy } from "@/components/home/__test__/usePopularListDummy";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = usePopularListDummy;

  return NextResponse.json({ res });
}
