import CreateEventVote from "@/components/vote/create/CreateEventVote";
import { Suspense } from "react";

type paramsType = {
  detail: string;
  lng: string;
};

const page = ({ params }: { params: paramsType }) => {
  console.log(params);
  if (!params.detail) {
    return <div>event id 가 없음</div>;
  }
  return (
    <>
      <div>
        event id 가 있음 {params.detail}
        <Suspense fallback={<div>에러가 났음</div>}>
          <CreateEventVote params={params} />
        </Suspense>
      </div>
      ;
    </>
  );
};
export default page;
