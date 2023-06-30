/**
 * @author mingyu
 */
"use client";
import Modal from "@/components/common/modal";
import ModalHeader from "@/components/common/modal/Header";
import ModalDescription from "@/components/common/modal/Description";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { storeGoodsType } from "@/types";
import Loading from "../Loading";
import CardBadge from "../common/cardList/CardBadge";
import banana from "@/assets/icons/banana_svgrepo.com.svg";

type storeModalProps = {
  goodsInfo: storeGoodsType;
  setModalToggle: Dispatch<SetStateAction<boolean>>;
};

const StoreModal = ({ goodsInfo, setModalToggle }: storeModalProps) => {
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
              <h2 className="text-2xl font-semibold md:text-5xl">
                {goodsInfo.name}
              </h2>
              {/* Badge List */}
              <div className="relative flex h-auto w-full items-center justify-center">
                {goodsInfo.sellCount > 10 && (
                  <CardBadge
                    label={"Hot"}
                    bgColor={"#FF7777"}
                    textColor={"white"}
                  />
                )}
                {new Date().getTime() -
                  new Date(goodsInfo.startDate).getTime() <
                  604800000 && (
                  <CardBadge
                    label={"New"}
                    bgColor={"#85C1E9"}
                    textColor={"white"}
                  />
                )}
              </div>

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
                {/* Descrpiton & Period */}
                <div className="flex h-auto w-60 flex-col items-center justify-center overflow-hidden rounded-xl border border-border py-3 dark:border-border-dark ms:h-80 ms:w-80">
                  {/* Description */}
                  <div className="flex h-auto w-full justify-center py-2">
                    {goodsInfo.description}
                  </div>
                  {/* Period */}
                  <div className="flex h-auto w-full justify-center py-2 ">
                    <span className="font-semibold text-secondary-dark-orange">
                      {goodsInfo.validPeriod}
                    </span>
                    <span className="text-base">일 사용가능</span>
                  </div>
                </div>
              </div>
              {/* Price */}
              <div className="mt-1 flex h-auto w-full items-center justify-center">
                <Image src={banana} alt="banana" width={32} height={32} />
                <p className="text-md ml-1 text-xl font-semibold">
                  {goodsInfo.price.toLocaleString()}
                </p>
              </div>
              {/* Buy Button */}
              <button className="h-12 w-36 rounded-lg bg-bg-button-yellow text-lg font-bold text-black duration-200 ease-in-out hover:bg-bg-button-yellow-light">
                구입하기
              </button>
            </div>
          )}
        </div>
      </ModalDescription>
    </Modal>
  );
};

export default StoreModal;
