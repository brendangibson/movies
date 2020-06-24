import React, { ReactNode } from "react";

interface Props {
  open?: boolean;
  onClose?: () => void;
  children: ReactNode;
}

/**
 * Modal
 */
const Modal = ({ open = false, children, onClose }: Props) => {
  const showClass = open ? "" : "hidden";
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 overflow-auto bg-opacity-50 bg-gray-100 flex ${showClass}`}
    >
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex shadow-xl">
        {children}
      </div>
    </div>
  );
};

export default Modal;
