"use client";
import { useUserInfoQuery } from "@/hooks/reactQuery/useSignInQuery";
import { useMainStore } from "@/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "@/components/Loading";

const SignIn = ({
  accessToken,
  refreshToken,
  userId,
}: {
  refreshToken: string;
  accessToken: string;
  userId: number;
}) => {
  const router = useRouter();
  const store = useMainStore((state) => state);
  const { data } = useUserInfoQuery({ userId });

  useEffect(() => {
    if (data !== undefined) {
      const fetchUserData = data.data;

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
        points: fetchUserData.points,
        accessToken,
        refreshToken,
      };
      store.setIsLogin(true);
      store.setUserInfo(userInfo);
    }
  }, [data]);

  useEffect(() => {
    if (store.isLogin && store.user.accessToken !== undefined) {
      const location = localStorage.getItem("pathname");
      console.log(location);
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
