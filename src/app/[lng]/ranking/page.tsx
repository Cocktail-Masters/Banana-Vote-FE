import getSeason from "@/common/fetch/getSeason";
import Redirect from "./redirect.client";

const Page = async () => {
  const seasons = await getSeason();
  return (
    <Redirect
      url={`http://localhost:3001/ranking/${seasons[0]?.id}`}
    ></Redirect>
  );
};
export default Page;
