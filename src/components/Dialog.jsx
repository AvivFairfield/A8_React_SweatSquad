import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

export const Dialog = ({ open, onClose, title, children }) => {
  const dialogRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex justify-center items-center">
      <div className="fixed inset-0 bg-gray-900 bg-opacity-90"></div>

      <div className="bg-white rounded-lg shadow-lg max-w-lg mx-auto z-50 w-5/6 sm:w-3/4 lg:w-1/4">
        <div className="p-6" ref={dialogRef}>
          <div className="relative">
            <FontAwesomeIcon
              icon={faClose}
              onClick={onClose}
              className="absolute right-0 cursor-pointer p-1"
            />
            <h2 className="text-lg font-semibold mb-4">{title}</h2>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
