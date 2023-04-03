import PageTitle from "@/components/common/PageTitle";
import StoreSection from "@/components/store/StoreSection";

const Store = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      {/* 타이틀 영역 */}
      <PageTitle title="바나나 스토어" />
      {/* 본문 영역 */}
      <StoreSection />
    </div>
  );
};
export default Store;
