export default async function getRanking(
  seasonId: string,
  page_num = 0,
  page_size = 10
) {
  const addQuery =
    seasonId !== "default"
      ? "&" +
        new URLSearchParams({
          season_id: seasonId,
        })
      : "";
  const url = new URL(
    "http://localhost:3001/api/ranking?" +
      new URLSearchParams({
        page_num: String(page_num),
        page_size: String(page_size),
      }) +
      addQuery
  );
  const res = await fetch(url);
  // Recommendation: handle errors
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
