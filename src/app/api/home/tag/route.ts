/**
 * @author mingyu
 */

import { tagTop10Dummy } from "@/components/home/__test__/tagTop10Dummy";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = tagTop10Dummy;

  return NextResponse.json({ res });
}
