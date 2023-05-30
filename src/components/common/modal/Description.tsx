import { Dialog } from "@headlessui/react";

const ModalDescription = ({
  className = `flex h-full max-h-[86%] w-full max-w-[1200px] justify-center`,
  children,
}: {
  className?: string;
  children: React.ReactNode | undefined | null;
}) => {
  return (
    <Dialog.Description className={`${className}`}>
      {children}
    </Dialog.Description>
  );
};

export default ModalDescription;
