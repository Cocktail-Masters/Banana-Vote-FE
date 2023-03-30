export default async function getRanking(page_num = 0, page_size = 10) {
  const url = new URL(
    "http://localhost:3001/api/ranking?" +
      new URLSearchParams({
        page_num: String(page_num),
        page_size: String(page_size),
      })
  );
  const res = await fetch(url);
  console.log(res);
  // Recommendation: handle errors
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
