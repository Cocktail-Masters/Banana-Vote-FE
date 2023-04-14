import { ReactNode } from "react";

const VoteDetailLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full min-h-screen h-full justify-center">
      <div className="max-w-7xl w-full ">
        <div className="mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default VoteDetailLayout;
