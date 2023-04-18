"use client";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/dist/client/router";
import { Fragment, ReactNode, useCallback } from "react";

const Modal = ({
  children,
  onClose,
}: {
  onClose: () => void;
  children: ReactNode | undefined;
}) => {
  return (
    <Transition appear as={Fragment} show={true}>
      <Dialog onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-7xl transform overflow-y-auto rounded-2xl  bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-bg-feed-dark dark:text-text-normal-dark">
                <Dialog.Title
                  as="h3"
                  className="relative mb-4 flex justify-center text-xl font-extrabold leading-6 text-gray-900"
                >
                  <button
                    id="picketModalCloseButton"
                    className={`absolute top-1 right-3`}
                    onClick={onClose}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6 transition-colors duration-300 dark:text-text-normal-dark"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </Dialog.Title>
                <Dialog.Description
                  className={`flex h-full max-h-[86%] w-full max-w-[1200px] justify-center`}
                >
                  {children}
                </Dialog.Description>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
