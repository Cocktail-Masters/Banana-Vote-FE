export default async function getRanking({
  seasonId = "default",
  pageNum = 0,
  pageSize = 10,
  nickname,
}: {
  seasonId?: string;
  pageNum?: number;
  pageSize?: number;
  nickname?: string;
}) {
  const addSeasonQuery =
    seasonId !== "default"
      ? "&" +
        new URLSearchParams({
          season_id: seasonId,
        })
      : "";

  const addNicknameQuery =
    nickname !== undefined
      ? "&" +
        new URLSearchParams({
          nickname: nickname,
        })
      : "";
  const url = new URL(
    process.env.NEXT_PUBLIC_HOSTNAME +
      "/api/ranking?" +
      new URLSearchParams({
        page_num: String(pageNum),
        page_size: String(pageSize),
      }) +
      addSeasonQuery +
      addNicknameQuery
  );
  const res = await fetch(url);
  // Recommendation: handle errors
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
