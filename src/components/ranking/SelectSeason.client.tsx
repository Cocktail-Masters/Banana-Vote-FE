"use client";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { seasonTypes } from "@/types";
import getSeason from "@/common/fetch/getSeason";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading";
import Link from "next/link";
import { rankingParamsType } from "@/app/[lng]/ranking/[seasonId]/[paginationIndex]/page";

const SelectSeason = ({ params }: { params: rankingParamsType }) => {
  const { seasonId: selectedSeasonId } = params;
  const { data: seasonList = [], isLoading } = useQuery<seasonTypes>({
    queryKey: ["season"],
    queryFn: getSeason,
  });

  const selectedSeasonIndex = seasonList
    .map((v) => v.id)
    .indexOf(Number(selectedSeasonId));

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Menu as="div" className="relative inline-block  h-[60px] text-left">
        <Menu.Button className="inline-flex h-full w-full items-center justify-center rounded-[20px] border-[1px] border-[#D9D9D9] bg-white px-4 py-2 text-lg font-medium text-[#828282] shadow-md hover:bg-[#e6e6e6] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <ChevronDownIcon className="m-auto mr-2 h-5 w-5" aria-hidden="true" />
          <div className="w-[160px] rounded-[20px] bg-[#F9F6ED] p-2 text-[25px] font-bold">
            {selectedSeasonIndex >= 0
              ? seasonList[selectedSeasonIndex].description
              : ""}
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
              {seasonList.map((v) => {
                return (
                  <Menu.Item key={v.id}>
                    {({ active }) => (
                      <Link href={`/ranking/${String(v.id)}/0`}>
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <span>{v.description}</span>
                        </button>
                      </Link>
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
