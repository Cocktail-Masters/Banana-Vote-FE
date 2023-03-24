import { ReactNode } from "react";

const Modal = ({
  maxWidth = "1920px",
  maxHeight = "1080px",
  minWidth = "300px",
  minHeight = "300px",
  width = "300px",
  height = "300px",
  padding = "0px",
  margin = "0px",
  onClose,
  isOpen,
  backgroundColor = "white",
  children,
}: ModalProp) => {
  return (
    <div
      data-te-modal-init
      className="none h-100vh fixed top-0 left-0 w-full overflow-x-hidden outline-none "
      id="exampleModal"
    >
      <div
        className="none fixed top-0 left-0 h-full w-full bg-black/70"
        onClick={onClose}
      ></div>
      <div
        className={`fixed left-[50%] top-[50%] z-10 max-h-screen translate-x-[-50%] translate-y-[-50%] overflow-y-auto rounded-2xl bg-white dark:bg-black`}
        style={{
          width: width,
          height: height,
          minWidth,
          minHeight,
          padding,
          margin,
          maxHeight,
          maxWidth,
          backgroundColor: backgroundColor,
        }}
      >
        {children}
      </div>
    </div>
  );
};

type ModalProp = {
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  onClose: () => void;
  isOpen?: boolean;
  backgroundColor?: string;
  children: ReactNode;
};

export default Modal;
