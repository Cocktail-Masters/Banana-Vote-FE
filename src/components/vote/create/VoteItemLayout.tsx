const VoteItemLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-2 mb-2 h-[120px] overflow-hidden rounded-2xl bg-white outline outline-0 drop-shadow-md focus-within:outline-4 focus-within:outline-secondary-orange active:outline-4 active:outline-primary-yellow">
      {children}
    </div>
  );
};
export default VoteItemLayout;
