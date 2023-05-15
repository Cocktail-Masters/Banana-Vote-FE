import Provider from "./Provider";
import "./globals.css";
import LayoutHeader from "@/components/header/LayoutHeader";
import { i18n } from "i18n-config";
import { Metadata } from "next/types";

export async function generateStaticParams() {
  return i18n.locales.map((lng) => ({ lng }));
}

/**
 * @description 동적으로 metadata를 생성하는 함수
 * @todo 동적으로 title과 desctiption을 생성하는 경우 SEO에 문제가 생길것인지 논의 필요
 */
// export async function generateMetadata({
//   params,
// }: {
//   params: any;
// }): Promise<Metadata> {
//   let title = "";
//   let description = "";

//   switch (params.lng) {
//     case "ko":
//       title = "바나나 보트";
//       description = "가볍게 즐기는 투표 플랫폼, 바나나 보트";
//       break;
//     case "en":
//       title = "Banana Vote";
//       description = "Banana Vote, a light voting platform";
//       break;
//     case "jp":
//       title = "バナナ投票";
//       description = "Banana Vote(バナナ投票)、軽い投票プラットフォーム";
//       break;
//     default:
//       title = "Banana Vote";
//       description = "Banana Vote, a light voting platform";
//   }

//   return { title: title, description: description };
// }

/**
 * @description 정적으로 metadata를 생성하는 함수
 */
// export const metadata: Metadata = {
//   title: "Banana Vote",
//   description: "가볍게 즐기는 투표 플랫폼, 바나나 보트",
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
