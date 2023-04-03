"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Redirect = ({ url }: { url: string }) => {
  const router = useRouter();
  useEffect(() => {
    router.push(url);
  }, [router, url]);
  return <div></div>;
};
export default Redirect;
