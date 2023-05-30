/**
 * @author mingyu
 */
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";
import enLocale from "timeago.js/lib/lang/en_US";

/**
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

/**
 * @description 포맷에 맞춰 남은 (시간 or 일 or 주 or 년) 구하기
 * @param pathname usePathname Hook
 * @param date 날짜 값
 * @returns 포맷된 남은 시간 (ex. 2주일 전, 방금, 15분 전, 2년 전)
 */
export const getRelativeDays = (pathname: string, date: string) => {
  // next/navigation's usePathname Hook is required.
  const currentLng = pathname.substring(1, 3);
  register(currentLng, currentLng === "ko" ? koLocale : enLocale);
  return format(new Date(date), currentLng);
};
