"use client";
import { picketsType, picketType } from "@/types";
import { useState } from "react";
import Modal from "../modal/Modal";
import Portal from "../modal/Portal";
import PicketAreaModalContent from "./ModalContent";
import SelectPicketImage from "./selectPicketImage";

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
        <Portal>
          <Modal
            width={"100%"}
            maxWidth={"1400px"}
            maxHeight={"80vh"}
            minHeight={"300px"}
            height={"80%"}
            onClose={() => {
              setChangeState({
                change: false,
                picket: {
                  picket_image_url: "",
                  price: 0,
                  position: 0,
                },
              });
              // onClose();
            }}
          >
            <div className="relative h-16 w-[100%]">
              <div className={`ModalHeader relative text-center`}>
                {changeState.change && (
                  <div
                    className={`t-5 absolute left-5`}
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
              </div>
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
            </div>
          </Modal>
        </Portal>
      )}
    </>
  );
};

export default PicketAreaModal;
