const LogoTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div className={`ml-4 text-[24px] font-bold text-black ${className}`}>
      Login in with {title}
    </div>
  );
};
export default LogoTitle;
