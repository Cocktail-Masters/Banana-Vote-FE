import { picketsType } from "@/types";
import { NextResponse } from "next/server";

export const DummyPicket: picketsType = {
  pickets: [
    {
      picketImageUrl:
        "https://cdn.discordapp.com/attachments/433506654009425921/987185259915399218/unknown.png",
      position: 1,
      price: 1600,
    },
    {
      picketImageUrl:
        "https://cdn.discordapp.com/attachments/433506654009425921/1021418121933885460/unknown.png",
      position: 2,
      price: 2400,
    },
    {
      picketImageUrl:
        "https://cdn.discordapp.com/attachments/433506654009425921/1021418121933885460/unknown.png",
      position: 3,
      price: 3600,
    },
    {
      picketImageUrl:
        "https://cdn.discordapp.com/attachments/433506654009425921/1021418121933885460/unknown.png",
      position: 4,
      price: 4800,
    },
    {
      picketImageUrl:
        "https://cdn.discordapp.com/attachments/433506654009425921/1021418121933885460/unknown.png",
      position: 5,
      price: 5000,
    },
  ],
};

export async function GET(request: Request) {
  const res = DummyPicket;

  return NextResponse.json({ res });
}
