import { DummyPicket } from "@/components/voteDetail/picketArea/DummyPicket";
import { useQuery } from "react-query";

export const usePicketQuery = ({
  queryKey,
  voteId,
}: {
  queryKey: (string | number)[];
  voteId: number;
}) => {
  return useQuery([queryKey, voteId], async () => {
    const response = DummyPicket;

    return response;
  });
};
