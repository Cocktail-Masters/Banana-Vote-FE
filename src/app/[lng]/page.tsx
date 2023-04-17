import LocaleSwitcher from "@/components/common/locale-switcher";
import { getDictionary } from "get-dictionary";
import { Locale } from "i18n-config";

export default async function Home({
  params: { lng },
}: {
  params: { lng: Locale };
}) {
  const { messages } = getDictionary(lng);

  return (
    <div>
      <LocaleSwitcher />
      <p>Current locale: {lng}</p>
      <p>
        This text is rendered on the server:
        {messages["server-component"].welcome}
        This text is rendered on the server:
        {messages["test"]["test2"]["test3"]}
      </p>
    </div>
  );
}
