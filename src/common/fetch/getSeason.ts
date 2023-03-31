import { seasonTypes } from "./../../types/index.d";
export default async function getSeason(): Promise<seasonTypes> {
  const url = new URL("http://localhost:3001/api/season");
  const res = await fetch(url);
  // Recommendation: handle errors
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
