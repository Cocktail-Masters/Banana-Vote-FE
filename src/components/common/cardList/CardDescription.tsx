/**
 * @author mingyu
 * @description Card 컴포넌트 하단 내용들을 담는 영역.
 */

type cardDescriptionProps = {
  children: React.ReactNode;
};

const CardDescription = ({ children }: cardDescriptionProps) => {
  return (
    <div className="relative flex h-1/3 w-full items-center justify-center rounded-b-2xl bg-bg-feed text-text-feed dark:bg-bg-feed-dark dark:text-text-feed-dark">
      {children}
    </div>
  );
};

export default CardDescription;
