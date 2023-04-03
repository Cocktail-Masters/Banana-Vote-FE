"use client";
import { picketsType, picketType } from "@/types";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PicketAreaModalContent from "./ModalContent";
import SelectPicketImage from "./SelectPicketImage";

type picketChangeType = {
  change: boolean;
  picket: picketType;
};

const PicketAreaModal = ({ pickets }: picketsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  const [changeState, setChangeState] = useState<picketChangeType>({
    change: false,
    picket: {
      picket_image_url: "",
      position: 0,
      price: 0,
    },
  });

  const onClick = ({ change, picket }: picketChangeType) => {
    console.log("picket", picket);
    setChangeState((prev) => {
      return { change, picket };
    });
  };

  return (
    <>
      <button
        className={
          "h-[45px] w-[100px] rounded-2xl bg-terriary-mint font-semibold shadow-md hover:bg-primary-yellow active:bg-secondary-orange"
        }
        onClick={onOpen}
      >
        참여하기
      </button>
      {isOpen && (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            open={isOpen}
            onClose={() => {
              setChangeState({
                change: false,
                picket: {
                  picket_image_url: "",
                  price: 0,
                  position: 0,
                },
              });
              onClose();
            }}
          >
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
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Payment successful
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={onClose}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
            {/* <Dialog.Panel>
              <Dialog.Title className={`ModalHeader`}>
                {changeState.change && (
                  <div
                    // className={`t-5 absolute left-5`}
                    onClick={() => {
                      setChangeState({
                        change: false,
                        picket: {
                          picket_image_url: "",
                          price: 0,
                          position: 0,
                        },
                      });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </div>
                )}
                <div className={`h-16`}>피캣 올리기</div>
              </Dialog.Title>
              <Dialog.Description>
                <button className={`absolute top-1 right-3`} onClick={onClose}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {changeState.change ? (
                  <SelectPicketImage
                    picket_image_url={changeState.picket.picket_image_url}
                    position={changeState.picket.position}
                    price={changeState.picket.price}
                  />
                ) : (
                  <PicketAreaModalContent
                    pickets={pickets}
                    onChangeState={onClick}
                  />
                )}
              </Dialog.Description>
            </Dialog.Panel> */}
          </Dialog>
        </Transition>
      )}
    </>
  );
};

export default PicketAreaModal;
