/**
 * @author mingyu
 * @description 신고 관리
 */

import PageTitle from "@/components/common/PageTitle";

const ManageReport = () => {
  return (
    <div className="flex h-full w-full flex-col items-center  bg-red-100 text-black">
      <div className="flex h-auto w-11/12">
        <PageTitle title={"신고 관리"} />
      </div>
      {/* 리스트 */}
      <div className="mt-3 h-auto w-full overflow-y-auto">리스트</div>
    </div>
  );
};

export default ManageReport;
