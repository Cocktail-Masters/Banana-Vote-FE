/**
 * @author mingyu
 */

import React from "react";

const MenuTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="flex min-h-[96px] w-full items-center bg-white p-2 text-3xl font-semibold dark:bg-bg-feed">
      {title}
    </h2>
  );
};

export default MenuTitle;
