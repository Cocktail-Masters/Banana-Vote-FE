"use client";

import Provider from "./Provider";
import { Noto_Sans } from "next/font/google";

import "./globals.css";
import LayoutHeader from "@/components/Layout/LayoutHeader";

// export const metadata = {
//   title: {
//     default: "Acme",
//     template: "%s | Acme",
//   },
// };

const notoSansKr = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={notoSansKr.className}>
      <body>
        <Provider>
          <LayoutHeader></LayoutHeader>
          {children}
        </Provider>
      </body>
    </html>
  );
}
