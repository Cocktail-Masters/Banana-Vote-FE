"use client";
import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "@theme/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/common/reactQuery/QueryClient";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider>
        <ChakraProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          {children}
        </ChakraProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
};

export default Provider;
