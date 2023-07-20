import { seasonTypes } from "../../types";
import api from "../axiosInstance";
export default async function getSeason(): Promise<seasonTypes> {
  // const url = new URL(process.env.NEXT_PUBLIC_HOSTNAME + "/api/season");
  // const res = await fetch(url);
  // Recommendation: handle errors
  const result = await api.get("/season");
  return result.data;
}
