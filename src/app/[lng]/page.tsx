import LocaleSwitcher from "@/components/common/locale-switcher";
import Redirect from "@/components/common/redirect.client";
import Loading from "@/components/Loading";
import { getDictionary } from "get-dictionary";
import { Locale } from "i18n-config";

export default async function Home({
  params: { lng },
}: {
  params: { lng: Locale };
}) {
  return (
    <div className="flex items-center justify-center">
      {/* <LocaleSwitcher /> */}
      <Loading />
      <Redirect url={`/home`} />
    </div>
  );
}
