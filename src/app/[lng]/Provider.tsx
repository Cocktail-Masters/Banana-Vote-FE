"use client";
import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/common/reactQuery/QueryClient";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Provider;
