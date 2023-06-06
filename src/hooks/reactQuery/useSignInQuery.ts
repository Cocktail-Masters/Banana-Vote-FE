import api from "@/common/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const userInfoFetch = async ({ userId }: { userId: number }) => {
  const response = await api(`/users/${userId}`);
  return response;
};

export const useUserInfoQuery = ({ userId }: { userId: number }) => {
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const response = await userInfoFetch({ userId });
      return response;
    },
  });
};
