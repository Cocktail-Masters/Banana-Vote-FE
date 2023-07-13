import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/common/axiosInstance";
import useTranslation from "@/hooks/useTranslation";
import { toast } from "react-toastify";

const modifiedUserAge = async ({ age }: { age: number }) => {
  const response = await api.patch(`/users/age`, { age });
  return response;
};

const useModifiedUserAgeMutation = () => {
  const queryClient = useQueryClient();
  const { translation } = useTranslation();
  return useMutation({
    mutationFn: modifiedUserAge,
    onSuccess: (data) => {
      toast.success(translation("modify_success"));
      queryClient.invalidateQueries(["userInfo"]);
    },
    onError: (error) => {
      toast.error(translation("modify_failed" + error));
    },
  });
};
export default useModifiedUserAgeMutation;
