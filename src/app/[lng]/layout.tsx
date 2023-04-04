import Provider from "./Provider";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import LayoutHeader from "@/components/Layout/LayoutHeader";

const languages = ["en"];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
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
    <html lang={lang}>
      <body>
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
