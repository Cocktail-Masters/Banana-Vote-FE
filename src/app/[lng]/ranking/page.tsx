import { getSeasonFromApi } from "@/app/api/season/route";
import Redirect from "./redirect.client";

const Page = async () => {
  const seasons = getSeasonFromApi();
  return <Redirect url={`/ranking/${seasons[0]?.id}/0`}></Redirect>;
};
export default Page;
