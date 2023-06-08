import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/common/axiosInstance';

const modifiedUserGender = async ({ gender }: { gender: string }) => {
  const response = await api.patch(`/users/gender`, { gender });
  return response;
};

const useModifiedUserGenderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: modifiedUserGender,
    onSuccess: (data) => {
      queryClient.invalidateQueries(['userInfo']);
    },
    onError: (error) => {},
  });
};
export default useModifiedUserGenderMutation;
