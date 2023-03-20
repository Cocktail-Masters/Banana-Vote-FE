"use client";

import Provider from "./Provider";
import { Noto_Sans } from "next/font/google";

import "./globals.css";
import LayoutHeader from "@/components/Layout/LayoutHeader";
import { Flex } from "@chakra-ui/react";

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
          <div className={"tiles"}>{children}</div>
          <div className={"footer"}></div>
        </Provider>
      </body>
    </html>
  );
}
