import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-full min-h-screen justify-center bg-slate-100">
      <div className="max-w-[1200px] w-full">{children}</div>
    </div>
  );
};

export default HomeLayout;
