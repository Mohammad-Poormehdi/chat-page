import React from "react";
import Button from "./Button";

interface ModalProps {
 
  onClose: () => void;
  bodyContent: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, bodyContent }) => {

  return (
    <div className="absolute inset-0 bg-black opacity-70 flex justify-center items-center">
      <div className="bg-white space-y-4 p-10 rounded-xl text-center">
        {bodyContent}
        <Button label="بستن" onClick={onClose} active />
      </div>
    </div>
  );
};
export default Modal;