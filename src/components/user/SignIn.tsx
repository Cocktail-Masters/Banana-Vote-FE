"use client";
import { useUserInfoQuery } from "@/hooks/reactQuery/useSignInQuery";
import { useMainStore } from "@/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "@/components/Loading";

const SignIn = ({ token, userId }: { token: string; userId: number }) => {
  const router = useRouter();
  const store = useMainStore((state) => state);
  const { data } = useUserInfoQuery({ userId });

  useEffect(() => {
    if (data !== undefined) {
      const fetchUserData = data.data;
      const splitToken = token.split(" ");
      const userInfo = {
        id: userId,
        nickname: fetchUserData.nickname,
        age: fetchUserData.age,
        gender: fetchUserData.gender ? fetchUserData.gender : "",
        ranking: fetchUserData.ranking,
        badgeImageUrl: fetchUserData.equippedBadgeImageUrl
          ? fetchUserData.equippedBadgeImageUrl
          : "",
        percentage: 0.0,
        accessToken: splitToken[0],
        refreshToken: splitToken[1] ? splitToken[1] : "",
      };
      store.setIsLogin(true);
      store.setUserInfo(userInfo);

      // Set Access Token to Cookie
      console.log("===== cookie =====");
      document.cookie = `accessToken=${splitToken[0]};`;
      console.log("c => " + document.cookie);
    }
  }, [data]);

  useEffect(() => {
    if (store.isLogin && store.user.accessToken !== undefined) {
      const location = localStorage.getItem("pathname");

      if (location !== undefined && location !== null) {
        localStorage.removeItem("pathname");
        router.push(location);
      }
    }
  }, [store.isLogin, store.user, router]);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Loading />
    </div>
  );
};

export default SignIn;
