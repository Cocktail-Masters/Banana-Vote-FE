/**
 * @author mingyu
 */
"use client";

import { useParams } from "next/navigation";

const SearchResultDescription = () => {
  const params = useParams();

  return (
    <div className="my-2 flex h-auto w-full bg-indigo-100">
      <h3 className="text-lg">#{params.tag}</h3>
    </div>
  );
};

export default SearchResultDescription;
