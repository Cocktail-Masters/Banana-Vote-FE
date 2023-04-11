/**
 * @author mingyu
 * @description 피드의 제목 부분
 */

const FeedTitle = ({ content }: { content: string }) => {
  return (
    <h2 className="mb-1 truncate rounded-xl pt-4 pb-4 pl-2 pr-2 text-xl font-bold transition duration-100 hover:bg-gray-100">
      {content}
    </h2>
  );
};

export default FeedTitle;
