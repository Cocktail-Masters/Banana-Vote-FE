import getSeason from "@/common/fetch/getSeason";
import Redirect from "./redirect.client";

const Page = async () => {
  const seasons = await getSeason();
  return <Redirect url={`/ranking/${seasons[0]?.id}`}></Redirect>;
};
export default Page;
