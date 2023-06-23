import Provider from "./Provider";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className="">
      {/* <SettingTheme /> */}
      <head>
        <script
          id="inline-script"
          dangerouslySetInnerHTML={{
            __html: `
          if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
              document.documentElement.classList.add("dark");
              localStorage.theme = "dark";
            } else {
              document.documentElement.classList.remove("dark");
              localStorage.theme = "light";
            }
            `,
          }}
        />
      </head>
      <body className="bg-white text-text-normal transition-colors dark:bg-black dark:text-text-normal-dark">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
