import PageTitle from "@/components/common/PageTitle";
import { getDictionary } from "get-dictionary";
import EventDataSection from "./dataSection";
import { Locale } from "i18n-config";

const Event = ({ params: { lng } }: { params: { lng: Locale } }) => {
  const { messages } = getDictionary(lng);

  return (
    <div className="flex h-full w-full flex-col items-center justify-start">
      <PageTitle title={messages.event.pageTitle} />
      <EventDataSection />
    </div>
  );
};
export default Event;
