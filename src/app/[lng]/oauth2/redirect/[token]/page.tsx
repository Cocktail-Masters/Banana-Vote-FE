'use client';

import Loading from '@/components/Loading';
import SignIn from '@/components/user/SignIn';

import { useParams, useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';

const Token = () => {
  const params = useParams();

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem('token', params.token);
  }, []);
  console.log(params.token);
  if (params.token !== undefined) {
    return <SignIn token={params.token} />;
  } else {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <Loading />
      </div>
    );
  }
};

export default Token;
