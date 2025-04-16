import React from "react";

const Modal = ({ open, onClose, children }) => {

  return (
    //backdrop
    <div
      onClick={onClose}
      className={`fixed inset-0 flex items-center justify-center transition-colors ${open ? "visible bg-neutral-950/30" : "invisible"} `}>
      <div 
      onClick={e => e.stopPropagation()}
      className={`bg-neutral-950 shadow-[0_1px_10px_6px_#67E8F9] border-2 border-[#67E8F9] rounded-xl  sm:p-8 p-2 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
