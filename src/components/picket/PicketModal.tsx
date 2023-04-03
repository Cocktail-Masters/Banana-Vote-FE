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
                  <Dialog.Panel className="w-full max-w-7xl transform overflow-y-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="relative mb-4 flex justify-center text-xl font-extrabold leading-6 text-gray-900"
                    >
                      {changeState.change && (
                        <div
                          className={`absolute left-1 w-2`}
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
                            viewBox="0 0 12 24"
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
                      <h1>피캣 올리기</h1>
                      <button
                        className={`absolute top-1 right-3`}
                        onClick={() => {
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
                    </Dialog.Title>
                    <Dialog.Description>
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
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
};

export default PicketAreaModal;
