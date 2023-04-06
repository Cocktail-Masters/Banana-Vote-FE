/**
 * @author mingyu
 */
import { useInterestListDummy } from "@/components/home/__test__/useInterestListDummy";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = useInterestListDummy;

  return NextResponse.json({ res });
}
