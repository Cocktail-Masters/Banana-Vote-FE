import Provider from "./Provider";

// export const metadata = {
// 	title: {
// 		default: "Acme",
// 		template: "%s | Acme",
// 	},
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
