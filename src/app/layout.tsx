import "./globals.css";

export const metadata = {
	title: {
		default: "Acme",
		template: "%s | Acme",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
