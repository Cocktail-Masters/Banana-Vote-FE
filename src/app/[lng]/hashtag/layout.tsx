/**
 * @author mingyu
 */

const HashTagLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full min-h-screen w-full items-center justify-center bg-slate-100 dark:bg-bg-normal-dark">
      {children}
    </div>
  );
};

export default HashTagLayout;
