/**
 * @author mingyu
 * @description CardBadgeList에 담겨 여러 개 붙일 수 있는 뱃지
 * @param label 뱃지 이름
 * @param bgColor 배경색
 * @param textColor 글씨색
 */

type cardBadgeProps = {
  label: string;
  bgColor: string;
  textColor: string;
};

const CardBadge = ({ label, bgColor, textColor }: cardBadgeProps) => {
  return (
    <div
      className={`mr-2 flex rounded-md pl-2 pr-2`}
      style={{ backgroundColor: bgColor }}
    >
      <p className={`text-sm font-bold`} style={{ color: textColor }}>
        {label}
      </p>
    </div>
  );
};

export default CardBadge;
