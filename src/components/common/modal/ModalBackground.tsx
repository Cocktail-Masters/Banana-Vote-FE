/**
 * @author mingyu
 * @description 모달 배경, 모달 active 중 화면 바깥 클릭 방지
 */
import React from "react";

type modalBackgroudProps = {
  bgColor?: string;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalBackground = ({ bgColor, setState }: modalBackgroudProps) => {
  return (
    <div
      className={`fixed top-0 left-0 z-40 w-screen h-screen ${bgColor}`}
      onClick={() => setState(false)}
    />
  );
};

export default ModalBackground;
