"use client";

import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

const Redirect = ({ url }: { url: string }) => {
  const router = useRouter();
  useLayoutEffect(() => {
    router.push(url);
  }, [router, url]);
  return <div></div>;
};
export default Redirect;
