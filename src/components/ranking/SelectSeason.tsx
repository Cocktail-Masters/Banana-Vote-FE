"use client";
import { Fragment, SVGProps, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { seasonTypes } from "@/types";
import DummyDate from "./__test__/DummyData.json";

const SelectSeason = () => {
  const dummyDate: seasonTypes = DummyDate.seasons;
  const [selectedSeason, setSelectedSeason] = useState(dummyDate[0]);

  return (
    <div className="top-16 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {selectedSeason.description}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="h-[300px] overflow-y-scroll px-1 py-1">
              {dummyDate.map((v) => {
                return (
                  <Menu.Item key={v.id}>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        onClick={() => setSelectedSeason(v)}
                      >
                        <span>{v.start_date}</span>
                        <span>{v.end_date}</span>
                        <span>{v.description}</span>
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
export default SelectSeason;
