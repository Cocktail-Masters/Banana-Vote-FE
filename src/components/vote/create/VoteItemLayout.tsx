const VoteItemLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="m-2 h-[120px] overflow-hidden rounded-2xl bg-white drop-shadow-md">
      {children}
    </div>
  );
};
export default VoteItemLayout;
