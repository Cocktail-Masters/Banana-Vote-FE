"use client";
import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { nanoid } from "nanoid";

// localStorage.setItem("searchList", {});

type searchListType = {
  id: string;
  nickname: string;
};

const SearchInput = () => {
  const [selected, setSelected] = useState("");
  const [searchList, setSearchList] = useState<searchListType[]>([]);
  const [query, setQuery] = useState("");

  const filteredSearchList =
    query === ""
      ? searchList
      : searchList.filter(({ id, nickname }) => {
          return nickname
            ?.toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""));
        });

  useEffect(() => {
    const searchListString = localStorage.getItem("searchList");
    const defaultSearchList = [
      { id: nanoid(), nickname: "너의 아이디" },
      { id: nanoid(), nickname: "나의 아이디" },
    ];
    const prevSearchList =
      searchListString === null
        ? defaultSearchList
        : JSON.parse(searchListString);
    setSearchList(prevSearchList);
    setQuery(prevSearchList[0].nickname);
  }, []);

  return (
    <div className="z-40 flex items-center justify-center gap-2 rounded-[20px] border-[1px] border-[#D9D9D9] bg-white p-2 drop-shadow-md">
      <Combobox>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default  text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full rounded-2xl border-none bg-[#F9F6ED] py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:outline-none focus:ring-0"
              displayValue={(user: searchListType) => user.nickname}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(e) => {
                e.preventDefault();
                if (e.key === "Enter") {
                  console.log("엔터눌림");
                  setSearchList((users: any) => {
                    const result = [
                      { id: nanoid(), nickname: query },
                      ...users,
                    ].slice(0, 5);
                    localStorage.setItem("searchList", JSON.stringify(result));
                    return result;
                  });
                }
              }}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            // afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredSearchList.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredSearchList.map(({ id, nickname }) => (
                  <Combobox.Option
                    key={id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={nickname}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          } flex  items-center justify-between`}
                        >
                          <div>{nickname}</div>
                          <button
                            className="h-5 w-5 overflow-hidden rounded-full hover:bg-teal-900"
                            onClick={(e) => {
                              e.preventDefault();
                              console.log(id);
                              setSearchList((v) =>
                                v.filter(({ id: prevId }) => prevId !== id)
                              );
                            }}
                          >
                            <XMarkIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </button>
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      <MagnifyingGlassIcon
        className="h-5 w-5 text-gray-400"
        aria-hidden="true"
        // onChange={() => setQuery("")}
      ></MagnifyingGlassIcon>
    </div>
  );
};
export default SearchInput;
