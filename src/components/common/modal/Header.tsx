import { Dialog } from "@headlessui/react";
import { CSSProperties } from "react";

const ModalHeader = ({
  children,
  style,
  className,
}: {
  children: React.ReactNode | undefined;
  style?: CSSProperties;
  className?: string;
}) => {
  return (
    <Dialog.Title as="h1" className={`${className}`}>
      {children}
    </Dialog.Title>
  );
};

export default ModalHeader;
