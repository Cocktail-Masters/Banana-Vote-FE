"use client";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStore } from "@/hooks/useStore";
import { colorStoreType, useColorModeStore } from "@/store/colorMode";

type providerType = {
  children: React.ReactNode;
};

const Provider = ({ children }: providerType) => {
  const [queryClient] = useState(new QueryClient());
  const theme = useStore(
    useColorModeStore,
    (state: undefined | colorStoreType) =>
      state !== undefined ? state.theme : undefined
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer
        position="bottom-center"
        hideProgressBar={true}
        theme={theme !== undefined ? theme : "light"}
      />
      {children}
    </QueryClientProvider>
  );
};

export default Provider;
