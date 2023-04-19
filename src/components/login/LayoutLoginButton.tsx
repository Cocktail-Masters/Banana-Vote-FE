const LayoutLoginButton = ({
  className,
  children,
  onClickHandler,
}: {
  className?: string;
  children: React.ReactNode;
  onClickHandler: () => void;
}) => {
  return (
    <button
      className={`flex h-[70px] w-[380px] select-none items-center justify-start gap-4 overflow-hidden rounded-xl pl-6 ${className}`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};
export default LayoutLoginButton;
