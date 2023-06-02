const LayoutLoginButton = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      className={`flex h-[70px] w-[380px] select-none items-center justify-start gap-4 overflow-hidden rounded-xl pl-6 ${className}`}
    >
      {children}
    </button>
  );
};
export default LayoutLoginButton;
