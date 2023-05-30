import React from "react";

const RankingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full justify-center">
      <div className="w-full max-w-[1200px]">{children}</div>
    </div>
  );
};

export default RankingLayout;
