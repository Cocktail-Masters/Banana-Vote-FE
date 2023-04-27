const EventLayout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <div className="flex h-full min-h-screen w-full justify-center bg-slate-100 transition-colors duration-300 dark:bg-bg-normal-dark dark:text-text-normal-dark">
      <div className="w-full max-w-[1200px]">{children}</div>
      {/* <div className="w-full max-w-[1200px]">{modal}</div> */}
    </div>
  );
};

export default EventLayout;
