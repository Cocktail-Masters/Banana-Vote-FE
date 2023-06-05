"use client";
import { Fragment, useEffect, useState, useCallback } from "react";
import { Combobox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { nanoid } from "nanoid";
import { useRouter, usePathname } from "next/navigation";
import getRanking from "@/common/fetch/getRanking";
import useCreateQueryString from "@/hooks/useCreateQueryString";
import useRankingRouter from "@/hooks/useRankingRouter";
import { rankingParamsType } from "@/app/[lng]/ranking/[seasonId]/[paginationIndex]/page";

type searchListType = {
  id: string;
  nickname: string;
};

const SearchInput = ({ params }: { params: rankingParamsType }) => {
  const { seasonId } = params;
  const router = useRouter();
  const pathname = usePathname();

  const [selected, setSelected] = useState<searchListType | null>({
    id: nanoid(),
    nickname: "",
  });
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

  const createQueryString = useCreateQueryString();

  const { routeCallbackHandler } = useRankingRouter(params);

  const searchHandler = async (nickname: string) => {
    const newRanking: { page: number; nowPage: number } = await getRanking({
      seasonId,
      nickname,
    });
    routeCallbackHandler({ newPageIndex: newRanking.nowPage });
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchList((users) => {
        if (query === "") return users;
        const newUsers = users.filter((v) => v.nickname !== query);
        const newItem = { id: nanoid(), nickname: query };
        const result = [newItem, ...newUsers].slice(0, 5);
        setSelected(newItem);
        localStorage.setItem("searchList", JSON.stringify(result));
        return result;
      });
      searchHandler(query);
    }
  };

  useEffect(() => {
    const searchListString = localStorage.getItem("searchList");
    const defaultSearchList: searchListType[] = [];
    const prevSearchList =
      searchListString === null
        ? defaultSearchList
        : (JSON.parse(searchListString) as searchListType[]);
    setSearchList(prevSearchList);
    setQuery("");
  }, []);

  return (
    <div className="z-19 flex h-[60px] w-[330px] items-center justify-center gap-2 rounded-[20px] border-[1px] border-[#D9D9D9] bg-white p-2 drop-shadow-md">
      <Combobox
        value={selected}
        onChange={(prevSearch: searchListType) => {
          setSelected(prevSearch);
          setQuery(prevSearch.nickname);
        }}
      >
        <div className="relative mt-1 w-full">
          <div className="relative w-full cursor-default text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="h-[45px] w-full rounded-[16px] border-none bg-[#F9F6ED] p-2 pl-4 pr-4 text-sm leading-5 text-gray-900 focus:outline-none focus:ring-0"
              displayValue={(user: searchListType) => user.nickname}
              placeholder="Search"
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={onKeyDownHandler}
            />
          </div>
          <Transition
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Combobox.Options className="absolute mt-3 max-h-60 w-full overflow-auto rounded-[8px] bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredSearchList.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredSearchList.map((search) => (
                  <Combobox.Option
                    key={search.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={search}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? "font-medium" : "font-normal"
                            } flex  items-center justify-between`}
                        >
                          <div>{search.nickname}</div>
                          <button
                            className="h-5 w-5 overflow-hidden rounded-full hover:bg-teal-900"
                            onClick={(e) => {
                              e.preventDefault();
                              setSearchList((v) =>
                                v.filter(
                                  ({ id: prevId }) => prevId !== search.id
                                )
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
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-teal-600"
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
        onChange={() => searchHandler(query)}
      ></MagnifyingGlassIcon>
    </div>
  );
};
export default SearchInput;
