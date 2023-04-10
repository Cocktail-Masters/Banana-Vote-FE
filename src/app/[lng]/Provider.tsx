"use client";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type providerType = {
  children: React.ReactNode;
  lng: string;
};

const Provider = ({ children, lng }: providerType) => {
  const [queryClient] = useState(new QueryClient());
  console.log(lng);
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
};

export default Provider;
