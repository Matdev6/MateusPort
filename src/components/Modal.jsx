import { X } from "lucide-react";

// Modal.jsx
export default function Modal({ children, onClose }) {
    return (
        <div
            onClick={onClose}
            className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-[9999] flex items-center justify-center"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white p-6 rounded-xl shadow-xl sm:w-3/5 w-11/12 "
            >
                <div className="flex justify-between">
                    <span></span>
                    <X onClick={onClose} className="cursor-pointer h-5 w-5 text-cyan-600 sm:mb-4" />
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}
