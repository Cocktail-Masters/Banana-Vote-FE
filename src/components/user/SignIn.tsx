'use client';
import { useUserInfoFetch } from '@/hooks/reactQuery/useSignInQuery';
import { useMainStore } from '@/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Loading from '@/components/Loading';


const SignIn = ({ token, userId }: { token: string; userId: number }) => {
  const router = useRouter();
  const store = useMainStore((state) => state);
  const { data } = useUserInfoFetch({ userId });

  useEffect(() => {
    if (data !== undefined) {
      const fetchUserData = data.data;
      const userInfo = {
        id: userId,
        nickname: fetchUserData.nickname,
        age: fetchUserData.age,
        gender: fetchUserData.gender ? fetchUserData.gender : '',
        ranking: fetchUserData.ranking,
        badgeImageUrl: fetchUserData.equippedBadgeImageUrl
          ? fetchUserData.equippedBadgeImageUrl
          : '',
        percentage: 0.0,
        accessToken: token,
        refreshToken: '',
      };
      store.setIsLogin(true);
      store.setUserInfo(userInfo);
    }
  }, [data]);

  useEffect(() => {
    console.log(
      'store.isLogin ',
      store.isLogin,
      store.user.accessToken !== undefined
    );
    if (store.isLogin && store.user.accessToken !== undefined) {
      router.back();
    }
  }, [store.isLogin, store.user, router]);

  return (
    <div className='flex h-full w-full items-center justify-center'>
      <Loading />
    </div>
  );
};

export default SignIn;
