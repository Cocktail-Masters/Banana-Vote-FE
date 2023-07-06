"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

const Modal = ({
  isOpen = true,
  children,
  className = "w-full max-w-7xl rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-bg-feed-dark dark:text-text-normal-dark",
  onClose,
}: {
  isOpen?: boolean;
  onClose: () => void;
  className?: string;
  children: ReactNode | undefined;
}) => {
  return (
    <Transition appear as={Fragment} show={isOpen}>
      <Dialog open={isOpen} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>
        <div className="fixed inset-0 z-[10000] overflow-y-auto">
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
              <Dialog.Panel
                className={`transform overflow-y-auto ${className}`}
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
