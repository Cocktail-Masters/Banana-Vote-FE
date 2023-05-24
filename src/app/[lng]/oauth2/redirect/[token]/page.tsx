"use client";

import Loading from "@/components/Loading";
import { useParams, useRouter } from "next/navigation";

import { useEffect } from "react";

const Token = () => {
  const params = useParams();
  const router = useRouter();
  useEffect(() => {
    console.log(params);
    localStorage.clear();
    localStorage.setItem("token", params.token);
    router.push("/home");
  }, []);

  return <Loading />;
};

export default Token;
