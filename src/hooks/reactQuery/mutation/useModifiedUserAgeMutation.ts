import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/common/axiosInstance';

const modifiedUserAge = async ({ age }: { age: number }) => {
  const response = await api.patch(`/users/age`, { age });
  return response;
};

const useModifiedUserAgeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: modifiedUserAge,
    onSuccess: (data) => {
      queryClient.invalidateQueries(['userInfo']);
    },
    onError: (error) => {},
  });
};
export default useModifiedUserAgeMutation;
