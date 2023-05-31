"use client";

import Loading from "@/components/Loading";
import { useMainStore } from "@/store";
import { useParams, useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const Token = () => {
  const params = useParams();
  const router = useRouter();
  const store = useMainStore((state) => state);
  // const flag = useState<boolean>(false);
  // console.log(store);
  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("token", params.token);
    const userInfo = {
      id: 0,
      nickname: "test",
      age: 20,
      gender: "test",
      ranking: 10,
      badgeImageUrl: "",
      percentage: 0.0,
      access_token: params.token,
      refresh_token: "",
    };
    store.setIsLogin(true);
    store.setUserInfo(userInfo);
  }, []);

  useEffect(() => {
    router.back();
  }, [store.user]);

  return <Loading />;
};

export default Token;
