import Provider from "./Provider";
import "./globals.css";
import LayoutHeader from "@/components/Layout/LayoutHeader";
import SettingTheme from "./settingTheme";
import { i18n } from "i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((lng) => ({ lng }));
}

// export const metadata = {
//   title: {
//     default: "Acme",
//     template: "%s | Acme",
//   },
// };

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang} className="">
      <SettingTheme />
      <body className="bg-white dark:bg-black">
        <Provider>
          <LayoutHeader></LayoutHeader>
          <div className={"tiles"}>{children}</div>
          <div className={"footer"}></div>
          <div id="modal-root" />
        </Provider>
      </body>
    </html>
  );
}
