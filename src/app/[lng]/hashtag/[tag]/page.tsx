/**
 * @author mingyu
 */
import FeedList from "@/components/feed/FeedList";
import Loading from "@/components/Loading";
import React, { Suspense } from "react";
import HydratedHashtag from "./hydratedHashtag";

type hashtagPageProps = {
  lng: string;
  tag: string;
};

const Hashtag = ({ params }: { params: hashtagPageProps }) => {
  const DEFAULT_FILTER_OPTIONS = {
    isClosed: true,
    sortBy: 1,
  };

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <HydratedHashtag keyword={decodeURIComponent(params.tag)}>
        <div className="mt-5 flex w-[800px] flex-col items-start">
          <Suspense fallback={<Loading />}>
            <FeedList
              keyword={"#" + decodeURIComponent(params.tag)}
              filterOptions={DEFAULT_FILTER_OPTIONS}
            />
          </Suspense>
        </div>
      </HydratedHashtag>
    </>
  );
};

export default Hashtag;
