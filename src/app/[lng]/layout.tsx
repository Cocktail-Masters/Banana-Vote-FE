import Provider from "./Provider";
import "./globals.css";
import LayoutHeader from "@/components/header/LayoutHeader";
import { i18n } from "i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((lng) => ({ lng }));
}

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
      <body className="bg-white text-text-normal transition-colors dark:bg-black dark:text-text-normal-dark">
        <Provider>
          <LayoutHeader></LayoutHeader>

          <div className={"tiles"}>{children}</div>
          <div className={"footer"}></div>
        </Provider>
      </body>
    </html>
  );
}
