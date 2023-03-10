"use client";
import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../theme/theme";
import { CacheProvider } from "@chakra-ui/next-js";

const Provider = ({ children }: { children: React.ReactNode }) => {
	return (
		<CacheProvider>
			<ChakraProvider>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				{children}
			</ChakraProvider>
		</CacheProvider>
	);
};

export default Provider;
