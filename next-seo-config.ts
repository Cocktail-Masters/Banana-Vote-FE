import { URL } from "@constants/domain";

const SEO = {
	title: "banana vote",
	defaultTitle: "banana vote",
	description: "banana vote",
	titleTemplate: "banana vote - %s",
	additionalLinkTags: [
		{
			rel: "icon",
			href: "/favicon-16x16.png",
		},
		{
			rel: "apple-touch-icon",
			href: "/favicon-32x32.png",
			sizes: "32x32",
		},
	],
	languageAlternates: [
		{
			hrefLang: "ko",
			href: `${URL}`,
		},
		{
			hrefLang: "en",
			href: `${URL}/en`,
		},
	],
	additionalMetaTags: [
		{
			name: "theme-color",
			content: "#721480",
		},
	],
	openGraph: {
		type: "website",
		locale: "ko",
		url: URL,
		images: [
			{
				url: "/images/logo.png",
				width: 397,
				height: 156,
				alt: "banana vote",
			},
		],
		siteName: "banana vote",
	},
};
export default SEO;
