'use client';

import Loading from '@/components/Loading';
import SignIn from '@/components/user/SignIn';

import { useParams, useRouter } from 'next/navigation';

<<<<<<< HEAD
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

type jwtToken = {
  id: number;
  email: string;
  role: string;
  exp: number;
};
=======
import { useEffect, useState } from 'react';
>>>>>>> f3ce74da3c9dd7e246b975a3831277c665045ea3

const Token = () => {
  const params = useParams();
  const token = params.token;
  const decoded: jwtToken = jwt_decode(token);
  useEffect(() => {
    localStorage.clear();
    localStorage.setItem('token', params.token);
  }, []);
  console.log(params.token);
  if (params.token !== undefined) {
    return <SignIn token={params.token} userId={decoded.id} />;
  } else {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <Loading />
      </div>
    );
  }
};

export default Token;
