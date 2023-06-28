import React, { Dispatch, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

type filterAreaProps = {
  orderBy: number;
  setOrderBy: Dispatch<React.SetStateAction<number>>;
  filterElementList: filterElement[];
};

type filterElement = {
  id: number;
  label: string;
};

const FilterArea = ({
  orderBy,
  setOrderBy,
  filterElementList,
}: filterAreaProps) => {
  return (
    <div className="z-10 flex h-12 w-full justify-end p-3">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md border border-border bg-bg-button px-4 py-2 text-sm font-medium text-text-button hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:border-border-dark dark:bg-bg-button-dark dark:text-text-button-dark">
            {orderBy !== undefined && filterElementList
              ? filterElementList.find((element) => element.id === orderBy)
                  ?.label
              : "Options"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="secondary-orange"
              className="-mr-1 ml-2 h-5 w-5 stroke-secondary-orange"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-1 w-28 origin-top-right divide-y divide-gray-100 rounded-md bg-bg-button shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-bg-button-dark">
            <div className="px-1 py-1">
              {filterElementList &&
                filterElementList.map((item: filterElement) => {
                  return (
                    <Menu.Item key={item.id}>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-secondary-orange text-text-button"
                              : "text-inherit"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          onClick={() => setOrderBy(item.id)}
                        >
                          {item.label}
                        </button>
                      )}
                    </Menu.Item>
                  );
                })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default FilterArea;
