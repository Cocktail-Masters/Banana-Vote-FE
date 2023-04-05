import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const ContentModal = ({
  isOpen,
  onClose,
  voteId,
}: {
  isOpen: boolean;
  onClose: () => void;
  voteId: number;
}) => {
  return (
    <Transition appear show={isOpen}>
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
          <div className="fixed inset-0 bg-black bg-opacity-75"></div>
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Dialog.Panel
              className={
                "modalContent h-full w-full max-w-2xl rounded-2xl bg-white p-3"
              }
            >
              <div
                className={"header relative flex items-center justify-center"}
                          >
                              <div>
                                  { }
                              </div>
                <button
                  className={`absolute sm:right-1 lg:right-4`}
                  onClick={onClose}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ContentModal;
