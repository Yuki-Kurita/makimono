import { Category } from "@/model/types";
import React from "react";

interface SearchModalProps {
  onClickCloseModal: () => void;
  searchWord: string;
  onChangeSearchWord: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitSearchWord: () => void;
  categories: Category[];
  selectedCategory: string;
  onChangeSelectCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  onClickCloseModal,
  searchWord,
  onChangeSearchWord,
  onSubmitSearchWord,
  categories,
  selectedCategory,
  onChangeSelectCategory,
}) => {
  return (
    <>
      <div
        className="fixed z-40 inset-0 bg-gray-600 bg-opacity-75 transition-opacity"
        onClick={onClickCloseModal}
      ></div>
      <div className="fixed z-50 inset-0 m-auto w-fit h-fit">
        <div className="relative p-4 w-[400px] md:w-[800px] lg:w-[1100px] max-w-2xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex align-middle">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-4 ml-auto inline-flex items-center"
                onClick={onClickCloseModal}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex align-middle items-start rounded-t border-b px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 mr-1 ml-2 mt-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={searchWord}
                onChange={onChangeSearchWord}
                className="p-2 text-lg focus:outline-none w-full"
                placeholder="Search roadmaps"
              />
            </div>
            <div className="p-6 space-y-6">
              <select
                className="block text-gray-500 appearance-none w-full border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
                value={selectedCategory}
                onChange={onChangeSelectCategory}
              >
                <option value="">--Please choice category--</option>
                {categories?.map((it) => {
                  return (
                    <option key={it.id} value={it.name}>
                      {it.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex p-6 space-x-2 rounded-b border-t border-gray-200 justify-end">
              <button
                type="submit"
                className="text-white bg-accent hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={onSubmitSearchWord}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
