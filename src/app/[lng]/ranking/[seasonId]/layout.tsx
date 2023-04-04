import React from "react";

const RankingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full min-h-screen w-full justify-center bg-slate-100">
      <div className="w-full max-w-[1200px]">{children}</div>
    </div>
  );
};

export default RankingLayout;
