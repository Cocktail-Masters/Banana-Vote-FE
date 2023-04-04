import getSeason from "@/common/fetch/getSeason";
import Redirect from "./redirect.client";

const Page = async () => {
  const seasons = await getSeason();
  return (
    <Redirect
      url={`${process.env.NEXT_PUBLIC_HOSTNAME}/ranking/${seasons[0]?.id}`}
    ></Redirect>
  );
};
export default Page;
