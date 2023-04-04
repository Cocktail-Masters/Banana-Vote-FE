/**
 * @author mingyu
 * @description CardDescription 컴포넌트 내에서 왼쪽 상단에 붙여지는 카드 뱃지들을 담는 영역.
 */
const CardBadgeList = ({ children }: { children: React.ReactNode }) => {
  return <div className="absolute top-2 left-3 flex">{children}</div>;
};

export default CardBadgeList;
