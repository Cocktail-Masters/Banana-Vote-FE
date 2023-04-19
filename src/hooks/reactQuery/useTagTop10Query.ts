/**
 * @author mingyu
 */

import { tagTop10Dummy } from "@/components/home/__test__/tagTop10Dummy";
import { useQuery } from "@tanstack/react-query";

export const fetchTagTop10 = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/home/tag`
  )
    .then((response) => response.json())
    .catch((e) => e);

  return response.res;
};

export const useTagTop10Query = ({ queryKey }: { queryKey: string }) => {
  return useQuery([queryKey], async () => {
    const response = tagTop10Dummy;

    return response;
  });
};
