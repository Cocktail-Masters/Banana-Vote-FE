import { seasonTypes } from "../../types";
export default async function getSeason(): Promise<seasonTypes> {
  const url = new URL(process.env.NEXT_PUBLIC_HOSTNAME + "/api/season");
  const res = await fetch(url);
  // Recommendation: handle errors
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
