module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"storybook-addon-next-router",
		"@chakra-ui/storybook-addon",
		"storybook-react-i18next",
	],
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-webpack5",
	},
};

// const path = require("path");

// module.exports = {
//   stories: [
//     "../stories/**/*.stories.mdx",
//     "../stories/**/*.stories.@(js|jsx|ts|tsx)",
//   ],
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-interactions",
//     "storybook-addon-next-router",
//     "@chakra-ui/storybook-addon",
//     "storybook-react-i18next",
//   ],
//   staticDirs: ["../../coop-front/public","../../coop-front/src/asset"],
//   framework: "@storybook/react",
//   core: {
//     builder: "@storybook/builder-webpack5",
//   },
//   features: {
//     emotionAlias: false,
//   },

//   webpackFinal: async (config) => {
//     config.resolve.alias["/images/pencil/cursor.png"] = path.resolve(
//       __dirname,
//       "../../coop-front/public/images/pencil/cursor.png"
//     );
//     config.resolve.alias["@common"] = path.resolve(
//       __dirname,
//       "../../coop-front/src/common/"
//     );

//     config.resolve.alias["@asset"] = path.resolve(
//       __dirname,
//       "../../coop-front/src/asset/"
//     );

//     config.resolve.alias["@assets"] = path.resolve(
//       __dirname,
//       "../../coop-front/src/assets/"
//     );

//     config.resolve.alias["@components"] = path.resolve(
//       __dirname,
//       "../../coop-front/src/components"
//     );

//     config.resolve.alias["@theme"] = path.resolve(
//       __dirname,
//       "../../coop-front/src/theme"
//     );

//     config.resolve.alias["@styles"] = path.resolve(
//       __dirname,
//       "../../coop-front/styles"
//     );

//     config.resolve.alias["@pages"] = path.resolve(
//       __dirname,
//       "../../coop-front/pages"
//     );

//     config.resolve.alias["@types"] = path.resolve(
//       __dirname,
//       "../../coop-front/types/index"
//     );

//     config.resolve.alias["@types"] = path.resolve(
//       __dirname,
//       "../../coop-front/types/index"
//     );

//     config.resolve.alias["@coop/draw"] = path.resolve(
//       __dirname,
//       "../../../packages/coop-draw"
//     );

//     config.resolve.alias["@translations"] = path.resolve(
//       __dirname,
//       "../../coop-front/translations/"
//     );

//     config.resolve.alias["@translations"] = path.resolve(
//       __dirname,
//       "../../coop-front/src/translations/index"
//     );

//     config.resolve.alias["@hooks"] = path.resolve(
//       __dirname,
//       "../../coop-front/src/hooks"
//     );
//     config.resolve.fallback.fs = false;

//     config.module.rules.push({
//       test: /\.mjs$/,
//       include: /node_modules/,
//       type: "javascript/auto",
//     });

//     return config;
//   },
// };
