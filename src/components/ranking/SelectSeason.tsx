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
    <>
      <Menu as="div" className="relative inline-block  text-left">
        <Menu.Button className="inline-flex w-full justify-center rounded-[20px] border-[1px] border-[#D9D9D9] bg-white px-4 py-2 text-lg font-medium text-[#828282] shadow-md hover:bg-[#e6e6e6] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <ChevronDownIcon className="m-auto mr-2 h-5 w-5" aria-hidden="true" />
          <div className="rounded-[20px] bg-[#F9F6ED] p-2 text-[25px] font-bold">
            {selectedSeason.description}
          </div>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
    </>
  );
};
export default SelectSeason;
