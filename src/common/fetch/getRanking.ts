import api from "@/common/axiosInstance";

export default async function getRanking({
  seasonId,
  pageNum = 0,
  pageSize = 10,
  nickname,
}: {
  seasonId: string;
  pageNum?: number;
  pageSize?: number;
  nickname?: string;
}) {
  const result = await api.get(`/ranking/${seasonId}`, {
    params: {
      page: pageNum,
      size: pageSize,
      nickname,
    },
  });
  return result.data;
}
