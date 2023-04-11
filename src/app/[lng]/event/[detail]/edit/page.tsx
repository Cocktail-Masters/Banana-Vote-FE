import Loading from "@/components/Loading";
import CreateEventVote from "@/components/vote/create/CreateEventVote";
import { Suspense } from "react";

type paramsType = {
  detail: string;
  lng: string;
};

const page = ({ params }: { params: paramsType }) => {
  if (!params.detail) {
    return <div>event id 가 없음</div>;
  }
  return (
    <>
      <canvas
        id={"canvas"}
        style={{
          inset: "0px",
          pointerEvents: "none",
          position: "fixed",
          zIndex: 1000000000,
        }}
        width="958"
        height="100"
      ></canvas>
      <Suspense fallback={<Loading />}>
        <CreateEventVote params={params} />
      </Suspense>
    </>
  );
};
export default page;
