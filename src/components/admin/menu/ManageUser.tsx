/**
 * @author mingyu
 * @description 회원 관리
 */

import PageTitle from "@/components/common/PageTitle";

const ManageUser = () => {
  return (
    <div className="flex h-full w-full flex-col items-center  bg-red-100 text-black">
      <div className="flex h-auto w-11/12">
        <PageTitle title={"회원 관리"} />
      </div>
      {/* 리스트 */}
      <div className="mt-3 h-auto w-full overflow-y-auto">리스트</div>
    </div>
  );
};

export default ManageUser;
