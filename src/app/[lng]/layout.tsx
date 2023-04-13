import Provider from "./Provider";
import "./globals.css";
import LayoutHeader from "@/components/Layout/LayoutHeader";
import SettingTheme from "./settingTheme";
import Head from "next/head";
import { i18n } from "i18n-config";
import Script from "next/script";

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
      {/* <SettingTheme /> */}
      <head>
        <script
          id="inline-script"
          dangerouslySetInnerHTML={{
            __html: `
          if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
              document.documentElement.classList.add("dark");
              localStorage.theme = "dark";
            } else {
              document.documentElement.classList.remove("dark");
              localStorage.theme = "light";
            }
            `,
          }}
        />
      </head>
      <body className="bg-white text-text-normal transition-colors duration-300 dark:bg-black dark:text-text-normal-dark">
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
