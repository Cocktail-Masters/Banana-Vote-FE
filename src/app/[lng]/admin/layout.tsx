/**
 * @author mingyu
 */
import { ReactNode } from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full min-h-[calc(100vh-90px)] w-full justify-center bg-slate-100 dark:bg-bg-normal-dark">
      <div className="w-full max-w-[1200px]">{children}</div>
    </div>
  );
};

export default AdminLayout;
