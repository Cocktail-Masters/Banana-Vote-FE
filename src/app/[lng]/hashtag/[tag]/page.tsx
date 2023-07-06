/**
 * @author mingyu
 */
import FeedList from "@/components/feed/FeedList";
import Loading from "@/components/Loading";

type hashtagPageProps = {
  lng: string;
  tag: string;
};

const Hashtag = ({ params }: { params: hashtagPageProps }) => {
  const KEYWORD = "#" + decodeURIComponent(params.tag);
  const DEFAULT_FILTER_OPTIONS = {
    isClosed: true,
    sortBy: 1,
  };

  return (
    <>
      <div className="mt-5 flex w-[800px] flex-col items-start">
        <FeedList keyword={KEYWORD} filterOptions={DEFAULT_FILTER_OPTIONS} />
      </div>
    </>
  );
};

export default Hashtag;
