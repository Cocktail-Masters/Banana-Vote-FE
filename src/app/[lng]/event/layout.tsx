const EventLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full min-h-screen w-full justify-center">
      <div className="w-full max-w-[1200px]">{children}</div>
    </div>
  );
};

export default EventLayout;
