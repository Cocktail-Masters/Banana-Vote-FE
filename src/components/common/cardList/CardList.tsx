/**
 * @author mingyu
 * @description Card 컴포넌트들을 담는 리스트 영역. 자동으로 정렬해준다.
 */

type cardListProps = {
  children: React.ReactNode;
};

const CardList = ({ children }: cardListProps) => {
  return (
    <div className="h-100 grid w-full max-w-[1200px] select-none grid-cols-1 items-center justify-center gap-6  md:grid-cols-2 lg:grid-cols-3 ">
      {children}
    </div>
  );
};

export default CardList;
