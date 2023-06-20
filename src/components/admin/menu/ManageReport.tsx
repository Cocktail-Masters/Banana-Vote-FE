/**
 * @author mingyu
 * @description 신고 관리
 */
import { tmpReportList } from "../__test__/tmpReportList";

const ManageReport = () => {
  return (
    <div className="mt-3 h-auto w-full overflow-y-auto p-2">
      <table className="border-darkgray h-full w-full table-auto rounded-lg bg-white">
        <thead className="h-10 border-b">
          <tr>
            <th>신고 pk</th>
            <th>신고자</th>
            <th>신고 콘텐츠</th>
            <th>타입</th>
            <th>처리 여부</th>
          </tr>
        </thead>
        <tbody>
          {tmpReportList.reportList.map((report, index) => {
            return (
              <tr
                className={index % 2 === 0 ? "bg-white" : "bg-slate-100"}
                key={report.reportId}
              >
                <td className="py-2.5 text-center">{report.reportId}</td>
                <td
                  className="cursor-pointer py-2.5 text-center hover:text-blue-600 hover:underline-offset-2"
                  onClick={() => alert("click")}
                >
                  {report.reporterId}
                </td>
                <td
                  className="cursor-pointer py-2.5 text-center hover:text-blue-600 hover:underline-offset-2"
                  onClick={() => alert("click")}
                >
                  {report.reportedContentId}
                </td>
                <td className="py-2.5 text-center">
                  {report.reportedContentType}
                </td>
                <td
                  className={
                    report.isChecked
                      ? "py-2.5 text-center text-blue-500"
                      : "py-2.5 text-center text-red-500"
                  }
                >
                  {report.isChecked ? "완료" : "미완료"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageReport;
