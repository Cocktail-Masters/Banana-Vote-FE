import { Dispatch, SetStateAction } from "react";

const CreateVoteContent = ({
  setContent,
}: {
  setContent: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="w-full">
      <div className="relative w-full min-w-[200px]">
        <textarea
          className="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal shadow-md outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-secondary-orange focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0"
          placeholder=" "
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <label className="before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f69240] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-secondary-orange peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-secondary-orange peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent">
          Content
        </label>
      </div>
    </div>
  );
};
export default CreateVoteContent;
