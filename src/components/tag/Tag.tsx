const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      id="badge-dismiss-default"
      className="m-2 inline-flex h-9 items-center rounded-2xl bg-[#F9F6ED] px-2 py-1 text-sm font-bold text-black"
    >
      {children}
    </span>
  );
};
export default Tag;
