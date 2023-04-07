import PageTitle from "@/components/common/PageTitle";
import EventDataSection from "./dataSection";

const Event = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-start">
      <PageTitle title="이벤트" />
      <EventDataSection />
    </div>
  );
};
export default Event;
