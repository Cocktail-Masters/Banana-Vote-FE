/**
 * @author mingyu
 */
import Modal from "@/components/common/modal";
import ModalHeader from "@/components/common/modal/Header";
import ModalDescription from "@/components/common/modal/Description";
import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

type storeModalProps = {
  setModalToggle: Dispatch<SetStateAction<boolean>>;
  imageLink: string | StaticImageData;
};

const StoreModal = ({ setModalToggle, imageLink }: storeModalProps) => {
  return (
    <Modal onClose={() => setModalToggle(false)}>
      <ModalHeader className="justifty-center relative flex p-3">
        <button
          id="picketModalCloseButton"
          className={`absolute top-1 right-3`}
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
      <ModalDescription className="mt-3 flex items-center justify-center p-3">
        <div className="h-4/5 w-auto">
          <Image
            className="h-fit w-fit object-cover"
            src={imageLink}
            alt={"modal image"}
            width={600}
            height={600}
          />
        </div>
      </ModalDescription>
    </Modal>
  );
};

export default StoreModal;
