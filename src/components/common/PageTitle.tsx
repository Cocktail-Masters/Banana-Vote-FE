import React from "react";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className="w-full border-b-4 border-primary-yellow pt-6 pb-6 pl-2 pr-2 text-center xl:text-left">
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
    </div>
  );
};

export default PageTitle;
