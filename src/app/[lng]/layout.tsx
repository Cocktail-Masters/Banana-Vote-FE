import "./globals.css";
import LayoutHeader from "@/components/header/LayoutHeader";
import { i18n } from "i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((lng) => ({ lng }));
}

export default function Layout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <div>
      <LayoutHeader></LayoutHeader>
      <div className={"tiles"}>{children}</div>
      <div className={"footer"}></div>
    </div>
  );
}
