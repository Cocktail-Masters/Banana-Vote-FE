"use client";

import Loading from "@/components/Loading";
import SignIn from "@/components/user/SignIn";

import { useParams } from "next/navigation";

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
  const token = decodeURI(params.token);

  const splitToken = token.split(" ");
  const decoded: jwtToken = jwt_decode(splitToken[0]);

  useEffect(() => {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    localStorage.setItem("accessToken", splitToken[0]);
    localStorage.setItem("refreshToken", splitToken[1]);
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
