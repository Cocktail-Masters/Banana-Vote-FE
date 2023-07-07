import { picketsType } from "@/types";
import { NextResponse } from "next/server";

export const DummyPicket: picketsType = {
  pickets: [
    {
      picketImageUrl:
        "https://cdn.discordapp.com/attachments/433506654009425921/987185259915399218/unknown.png",
      position: 1,
      price: 1600,
      id: 0,
      ownerId: 0,
      voteId: 0,
    },
  ],
};

export async function GET(request: Request) {
  const res = DummyPicket;

  return NextResponse.json({ res });
}
