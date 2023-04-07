"use client";
import React, { useState } from "react";
import StoreProvider from "@/store/StoreProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type providerType = {
  children: React.ReactNode;
  lng: string;
};

const Provider = ({ children, lng }: providerType) => {
  const [queryClient] = useState(new QueryClient());
  console.log(lng);
  return (
    <StoreProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </StoreProvider>
  );
};

export default Provider;
