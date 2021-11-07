import React, { ReactNode, useState } from "react";
import { Dot } from "./Dot";

interface DotButtonProps {
  handleDeleteForm: () => void;
}

export const DotButton: React.VFC<DotButtonProps> = ({ handleDeleteForm }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickDelete = (e: any) => {
    e.preventDefault();
    handleDeleteForm();
  };
  return (
    <>
      <button
        className="text-gray-500 fill-current ml-auto mt-4 mr-2 focus:outline-none flex justify-end"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(() => !isOpen);
        }}
      >
        <Dot />
      </button>
      {/* ドロップダウンメニュー */}
      {isOpen && (
        <div className="flex">
          <div className="absolute right-0 sm:right-20 mt-2 bg-white shadow-xl z-20">
            <button
              className="block px-4 py-4 w-48 text-sm capitalize text-gray-700 text-left hover:bg-red-300 hover:text-white rounded-md"
              onClick={onClickDelete}
            >
              削除
            </button>
          </div>
        </div>
      )}
    </>
  );
};
