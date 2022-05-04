import { useEffect, useState } from "react";

interface ErrorMessageProps {
  message: string | undefined;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  const [isOpen, setIsOpen] = useState(message !== undefined);
  useEffect(() => {
    setIsOpen(message !== undefined);
  }, [message]);
  const handleOnClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && (
        <div
          className="bg-red-100 border border-accent text-accent px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{message}</span>
          <button
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={handleOnClose}
          >
            <svg
              className="fill-current h-6 w-6 text-accent"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};
