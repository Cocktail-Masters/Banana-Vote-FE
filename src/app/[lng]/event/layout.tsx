const EventLayout = (props: any) => {
  return (
    <div className="flex h-full min-h-screen w-full justify-center bg-slate-100 transition-colors duration-300 dark:bg-bg-normal-dark dark:text-text-normal-dark">
      <div className="w-full max-w-[1200px]">{props.children}</div>
      {props.modal}
    </div>
  );
};

export default EventLayout;
