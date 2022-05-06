interface SearchModalProps {
  onClickCloseModal: () => void;
  searchWord: string;
  onChangeSearchWord: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitSearchWord: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  onClickCloseModal,
  searchWord,
  onChangeSearchWord,
  onSubmitSearchWord,
}) => {
  return (
    <>
      <div
        className="fixed z-40 inset-0 bg-gray-600 bg-opacity-75 transition-opacity"
        onClick={onClickCloseModal}
      ></div>
      <div className="fixed z-50 inset-0 m-auto w-fit h-fit">
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
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
                className="h-6 w-6 text-gray-500 mr-1 mt-2"
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
              <p className="text-base leading-relaxed text-gray-500">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
            </div>
            <div className="flex p-6 space-x-2 rounded-b border-t border-gray-200 justify-end">
              <button
                type="submit"
                className="text-white bg-accent hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
