type VoteOptionToggleButtonPropsType<T> = {
  title?: string;
  isData: T;
  onClickHandler: (newState: T) => void;
  toggleContent: Array<{ data: T; content: string }>;
};

function VoteOptionToggleButton<T>({
  title,
  isData,
  toggleContent,
  onClickHandler,
}: VoteOptionToggleButtonPropsType<T>) {
  const getRoundedOption = (index: number) => {
    switch (index) {
      case 0:
        return "rounded-l-xl";
      case toggleContent.length - 1:
        return "rounded-r-xl";
    }
    return "none";
  };
  return (
    <>
      <div className={"flex content-center"}>
        <div className={"flex border-secondary-orange p-2.5 text-center "}>
          {title}
        </div>
        {toggleContent.map(({ data, content }, index) => {
          return (
            <button
              className={`${getRoundedOption(
                index
              )} h-[40px] w-[84px] border-2 border-secondary-orange p-1 drop-shadow-md transition duration-500`}
              key={content}
              onClick={() => onClickHandler(data)}
              style={{
                background: isData === data ? "#FFA45B" : "#D9D9D9",
                fontWeight: isData === data ? 700 : 500,
              }}
            >
              {content}
            </button>
          );
        })}
      </div>
    </>
  );
}
export default VoteOptionToggleButton;
