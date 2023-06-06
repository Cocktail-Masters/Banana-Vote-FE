/**
 * @author mingyu
 * @description 회원 관리
 */
import { tmpUserList } from "@/components/admin/__test__/tmpUserList";
import MenuTitle from "./MenuTitle";

const ManageUser = () => {
  return (
    <div className="flex h-full w-full flex-col items-center bg-[#e7e7ea] text-black">
      <MenuTitle title="회원 관리" />
      {/* 리스트 영역 */}
      <div className="mt-3 h-auto w-full overflow-y-auto p-2">
        <table className="border-darkgray h-full w-full table-auto rounded-lg bg-white">
          <thead className="h-10 border-b">
            <tr>
              <th>user pk</th>
              <th>닉네임</th>
              <th>역할</th>
              <th>활성화 여부</th>
            </tr>
          </thead>
          <tbody>
            {tmpUserList.map((user, index) => {
              return (
                <tr
                  className={index % 2 === 0 ? "bg-white" : "bg-slate-100"}
                  key={user.id}
                >
                  <td className="py-2.5 text-center">{user.id}</td>
                  <td
                    className="cursor-pointer py-2.5 text-center hover:text-blue-600 hover:underline-offset-2"
                    onClick={() => alert(user.nickname)}
                  >
                    {user.nickname}
                  </td>
                  <td className="py-2.5 text-center">{user.role}</td>
                  <td
                    className={
                      user.isActive === 1
                        ? "py-2.5 text-center text-blue-500"
                        : "py-2.5 text-center text-red-500"
                    }
                  >
                    {user.isActive === 1 ? "활성화" : "비활성화"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
