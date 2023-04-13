"use client";

import { useRouter } from "next/navigation";
import { useEffect, useInsertionEffect } from "react";

const Redirect = ({ url }: { url: string }) => {
  const router = useRouter();
  useInsertionEffect(() => {
    router.push(url);
  }, [router, url]);
  return <div></div>;
};
export default Redirect;
