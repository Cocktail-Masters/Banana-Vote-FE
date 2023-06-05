"use client";

import Loading from "@/components/Loading";
import SignIn from "@/components/user/SignIn";

import { useParams, useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

type jwtToken = {
  id: number;
  email: string;
  role: string;
  exp: number;
};

const Token = () => {
  const params = useParams();
  const token = params.token;
  const decoded: jwtToken = jwt_decode(token);
  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("token", params.token);
  }, []);

  if (params.token !== undefined) {
    return <SignIn token={params.token} userId={decoded.id} />;
  } else {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loading />
      </div>
    );
  }
};

export default Token;
