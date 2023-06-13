import { Fragment, useState, SetStateAction, Dispatch } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import useTranslation from "@/hooks/useTranslation";

export type selectedType<T> = {
  name: string;
  value: T;
};

type SelectListPropsType<T> = {
  list: selectedType<T>[];
  selected: selectedType<T>;
  setSelected: Dispatch<SetStateAction<selectedType<T>>>;
  callback: (selected: selectedType<T>) => void;
};

const SelectList = <T,>({
  list,
  selected,
  setSelected,
  callback,
}: SelectListPropsType<T>) => {
  const { translation } = useTranslation();
  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-60">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative">
            <Listbox.Button className="relative h-12 w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{selected?.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {list.map((v, vIdx) => (
                  <Listbox.Option
                    key={vIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={v}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {v.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      <button
        className="ml-3 h-12 w-24 rounded-lg border border-gray-300 bg-white text-center drop-shadow-xl dark:bg-black"
        onClick={() => callback(selected)}
      >
        {translation("mypage.profile.change")}
      </button>
    </div>
  );
};
export default SelectList;
