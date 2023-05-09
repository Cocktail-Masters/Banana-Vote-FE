/**
 * @author mingyu
 */
"use client";
import FeedListArea from "@/components/feed/FeedListArea";
import Loading from "@/components/Loading";
import React, { Suspense } from "react";
import HydratedHashtag from "./hydratedHashtag";

const Hashtag = () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <HydratedHashtag>
        <div className="flex items-start justify-center xl:justify-between">
          <Suspense fallback={<Loading />}>
            <FeedListArea />
          </Suspense>
        </div>
      </HydratedHashtag>
    </>
  );
};

export default Hashtag;
