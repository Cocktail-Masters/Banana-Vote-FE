/**
 * @author mingyu
 */
"use client";
import Modal from "@/components/common/modal";
import ModalHeader from "@/components/common/modal/Header";
import ModalDescription from "@/components/common/modal/Description";
import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import Image from "next/image";
import { storeGoodsType } from "@/types";
import Loading from "../Loading";

type storeModalProps = {
  goodsInfo: storeGoodsType;
  setModalToggle: Dispatch<SetStateAction<boolean>>;
  imageLink: string | StaticImageData;
};

const StoreModal = ({
  goodsInfo,
  setModalToggle,
  imageLink,
}: storeModalProps) => {
  useEffect(() => {
    console.log(goodsInfo);
  }, [goodsInfo]);

  return (
    <Modal onClose={() => setModalToggle(false)}>
      <ModalHeader className="justifty-center relative z-50 flex h-full p-3">
        <button
          id="picketModalCloseButton"
          className={`absolute right-3 top-1`}
          onClick={() => setModalToggle(false)}
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
      </ModalHeader>
      <ModalDescription className="z-50 mt-3 flex h-[calc(80vh)] h-full items-center justify-center p-3">
        <div className="flex h-full w-full items-center justify-center">
          {goodsInfo === null ? (
            <div className="flex h-20 w-20 items-center justify-center">
              <Loading />
            </div>
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-y-4">
              {/* Name */}
              <h2 className="text-3xl font-semibold md:text-5xl">
                {goodsInfo.name}
              </h2>
              {/* Badge List */}
              <div>Badge List</div>
              {/* Image & Description */}
              <div className="flex h-auto w-full flex-col items-center justify-center gap-y-4 md:flex-row md:gap-x-8">
                <div className="flex h-60 w-60 overflow-hidden rounded-xl  ms:h-80 ms:w-80">
                  <Image
                    className="h-fit w-fit object-cover"
                    src={goodsInfo.imageUrl}
                    alt={"modal image"}
                    width={1600}
                    height={1600}
                  />
                </div>
                <div className="flex h-60 w-60 flex-col items-center justify-center overflow-hidden rounded-xl border border-border dark:border-border-dark ms:h-80 ms:w-80">
                  {/* Description */}
                  <div className="flex h-auto w-full justify-center py-2">
                    {goodsInfo.description}
                  </div>
                  {/* Period */}
                  <div className="flex h-auto w-full justify-center py-2 ">
                    <span className="font-semibold text-secondary-dark-orange">
                      {goodsInfo.validPeriod}
                    </span>
                    <span>일 사용가능</span>
                  </div>
                </div>
              </div>
              {/* Price */}
              {/* Buy Button */}
            </div>
          )}
        </div>
      </ModalDescription>
    </Modal>
  );
};

export default StoreModal;
