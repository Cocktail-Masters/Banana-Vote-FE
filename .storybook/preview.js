export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

// import "../../coop-front/styles/globals.css";
// import * as NextImage from "next/image";
// import { RouterContext } from "next/dist/shared/lib/router-context";

// import i18n from "./i18next.js";
// import { RecoilRoot } from "recoil";
// import { css } from "@emotion/react";
// import { ChakraProvider } from "@chakra-ui/react";

// const theme = require("../../../apps/coop-front/src/theme/theme.ts");

// export const decorators = [
//   (Story, Context) => {
//     return (
//       <ChakraProvider theme={theme}>
//         <RecoilRoot>
//           <div
//             id="root-modal"
//             css={css`
//               position: relative;
//               z-index: 1000;
//             `}
//           ></div>
//           <Story />
//         </RecoilRoot>
//       </ChakraProvider>
//     );
//   },
// ];

// NextImage.defaultProps = {
//   unoptimized: true,
// };

// export const parameters = {
//   chakra: {
//     theme,
//     colorModeSwitch: {
//       //default values
//       enable: true,
//       position: "top-right",
//       margin: "1rem",
//       zIndex: 9999,
//     },
//   },
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
//   i18n,
//   locale: "en",
//   locales: {
//     en: "English",
//     ko: "한국어",
//   },
//   nextRouter: {
//     Provider: RouterContext.Provider,
//     // locale: "en", // optional
//   },
// };
