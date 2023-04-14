const TagCloseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      type="button"
      className="ml-2 inline-flex h-6 w-6 items-center rounded-2xl bg-transparent p-0.5 text-sm text-black hover:bg-[#FCDA76] hover:text-black "
      data-dismiss-target="#badge-dismiss-default"
      aria-label="Remove"
      onClick={onClick}
    >
      <svg
        aria-hidden="true"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span className="sr-only">Remove Tag</span>
    </button>
  );
};
export default TagCloseButton;
