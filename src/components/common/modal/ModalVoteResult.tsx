"use client";

import BananaRain from "@/components/animation/matter/BananaRain";
import Modal from "@components/common/modal/index";
import { useRef, useState } from "react";

const ModalVoteResult = () => {
  let [isOpen, setIsOpen] = useState(false);
  const scene = useRef<HTMLDivElement>(null);
  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        isOpen : {isOpen}
      </button>
      <div ref={scene} className="absolute left-0 right-0 z-10 h-full w-full" />
      <Modal
        className="h-96 w-96"
        isOpen={isOpen}
        onClose={() => setIsOpen((v) => !v)}
      >
        <BananaRain scene={scene} />
      </Modal>
    </>
  );
};
export default ModalVoteResult;
