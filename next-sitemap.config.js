/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.NEXT_PUBLIC_URL || "https://bananavote.kr", // 가명
	generateRobotsTxt: true,
	sitemapSize: 7000,
};
