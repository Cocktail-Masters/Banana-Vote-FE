/**
 * @author JSC
 * @description 랜덤한 ranking dummy data 생성 및 반환
 */

import { NextResponse } from "next/server";
import dummyData from "./DummyData.json";

export async function GET() {
  return NextResponse.json(dummyData.seasons);
}
