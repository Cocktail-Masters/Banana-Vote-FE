import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";
import { i18n } from "../i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import jwtDecode from "jwt-decode";
import { jwtToken } from "./types";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  return matchLocale(languages, locales, i18n.defaultLocale);
}

export async function middleware(request: NextRequest, response: NextResponse) {
  const pathname = request.nextUrl.pathname;
  const slug = pathname.split("/")[2];

  // Login 페이지 접근 시
  if (pathname.includes("/oauth2/redirect")) {
    const token = pathname.split("/")[3];

    const response = NextResponse.next();
    response.cookies.set("access-token", token);

    return response;
  }

  // Admin 페이지 접근 시
  if (pathname.includes("/admin")) {
    const token = request.cookies.get("access-token")?.value as string;
    const decodedToken: jwtToken = jwtDecode(token);
    const role = decodedToken.role;

    if (role !== "ADMIN") {
      return NextResponse.redirect(new URL("/home", request.url));
    }
  }

  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // // If you have one
  // if (
  //   [
  //     '/manifest.json',
  //     '/favicon.ico',
  //     // Your other files in `public`
  //   ].includes(pathname)
  // )
  //   return

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
