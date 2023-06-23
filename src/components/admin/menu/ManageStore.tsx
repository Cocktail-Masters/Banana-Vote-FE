/**
 * @author mingyu
 * @description 신고 관리
 */
const ManageStore = () => {
  return (
    <div className="mt-3 h-auto w-full overflow-y-auto p-2">
      <table className="border-darkgray h-full w-full table-auto rounded-lg bg-white">
        <thead className="h-10 border-b">
          <tr>
            <th>굿즈 pk</th>
            <th>이름</th>
            <th>타입</th>
            <th>....</th>
          </tr>
        </thead>
        <tbody>{/* Contents */}</tbody>
      </table>
    </div>
  );
};

export default ManageStore;
