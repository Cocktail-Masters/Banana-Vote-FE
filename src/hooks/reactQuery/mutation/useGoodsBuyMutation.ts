import api from "@/common/axiosInstance";
import { ERROR_MESSAGE } from "@/constants/error";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const goodsBuyPost = async ({ goodsId }: { goodsId: number }) => {
  const response = await api.post(`/goods/${goodsId}`);
  return response;
};

const handleUnauthorizedError = (error: any) => {};

const handleForbiddenError = (error: any) => {};

const handleBuyError = (error: any) => {
  const reason = error.response.data as string;
  let showMsg = "";

  switch (reason) {
    case "lack of point": // 포인트가 부족할 경우
      showMsg = ERROR_MESSAGE.LACK_OF_POINT;
      break;
    case "out of date": // 현재 상품 판매 기간이 아닐 경우
      showMsg = ERROR_MESSAGE.OUT_OF_DATE;
      break;
    case "lack of quantity": // 상품 판매 수량이 부족할 경우
      showMsg = ERROR_MESSAGE.LACK_OF_QUANTITY;
      break;
    default:
      showMsg = ERROR_MESSAGE.UNKNOWN;
  }

  alert(showMsg);
};

export const useGoodsBuyMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: goodsBuyPost,
    onSuccess: (data: any) => {
      queryClient.invalidateQueries(["goodsBuy"]);
      alert(`구입에 성공했습니다.`);
    },
    onError: (error: any) => {
      const status = error.response.status as number;

      switch (status) {
        case 401:
          handleUnauthorizedError(error);
          break;
        case 403:
          handleForbiddenError(error);
          break;
        case 409:
          handleBuyError(error);
          break;
        default:
          alert(ERROR_MESSAGE.UNKNOWN);
      }
    },
  });
};
