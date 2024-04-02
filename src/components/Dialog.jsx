import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

// Dialog component that displays a modal window.
// It takes `open`, `onClose`, `title`, and `children` as props.
export const Dialog = ({ open, onClose, title, children }) => {
  // useRef hook to reference the dialog element for click outside logic.
  const dialogRef = useRef();

  useEffect(() => {
    // Function to handle clicks outside the dialog, triggering the onClose callback.
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Event listener for mousedown event to detect and handle clicks outside the dialog.
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove event listener on component unmount.
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]); // Dependency array including onClose to handle updates.

  // Prevents rendering the dialog if `open` prop is false.
  if (!open) return null;

  return (
    // Modal overlay and content container.
    <div className="fixed inset-0 z-50 overflow-y-auto flex justify-center items-center">
      {/* Semi-transparent background overlay. */}
      <div className="fixed inset-0 bg-gray-900 bg-opacity-90"></div>

      {/* Dialog box with maximum width and responsive width settings. */}
      <div className="bg-white rounded-lg shadow-lg max-w-lg mx-auto z-50 w-5/6 sm:w-3/4 lg:w-1/4">
        {/* Dialog content area with padding and reference for the click outside logic. */}
        <div className="p-6" ref={dialogRef}>
          <div className="relative">
            {/* Close icon with click event to trigger onClose. */}
            <FontAwesomeIcon
              icon={faClose}
              onClick={onClose}
              className="absolute right-0 cursor-pointer p-1"
            />
            {/* Dialog title */}
            <h2 className="text-lg font-semibold mb-4">{title}</h2>
          </div>
          {/* Children components rendered here, allowing for custom content. */}
          {children}
        </div>
      </div>
    </div>
  );
};
