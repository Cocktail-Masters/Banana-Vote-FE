import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/common/axiosInstance";
import useTranslation from "@/hooks/useTranslation";
import { toast } from "react-toastify";

const modifiedUserGender = async ({ gender }: { gender: string }) => {
  const response = await api.patch(`/users/gender`, { gender });
  return response;
};

const useModifiedUserGenderMutation = () => {
  const queryClient = useQueryClient();
  const { translation } = useTranslation();
  return useMutation({
    mutationFn: modifiedUserGender,
    onSuccess: (data) => {
      toast.success(translation("modify_success"));
      queryClient.invalidateQueries(["userInfo"]);
    },
    onError: (error) => {
      toast.error(translation("modify_failed" + error));
    },
  });
};
export default useModifiedUserGenderMutation;
