/**
 * @author mingyu
 * @description 투표 종료까지 며칠 남았는지 계산하는 함수
 * @param startDate 시작일 (default : Today)
 * @param endDate 종료일
 * @returns 오늘과 해당 날짜의 일 수 차이
 */
export const getRemainDates = ({
  startDate,
  endDate,
}: {
  startDate?: string;
  endDate: string;
}) => {
  let formattedStart = startDate
    ? new Date(startDate).getTime()
    : new Date().getTime(); // default: Today
  let formattedEnd = new Date(endDate).getTime();

  let diff = formattedEnd - formattedStart;
  let result = Math.floor(diff / (1000 * 60 * 60 * 24));

  return result;
};
