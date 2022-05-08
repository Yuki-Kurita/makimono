import { Category } from "@/model/types";
import { ExploreQuery } from "@/pages/explore";
import { useRouter } from "next/router";
import { useState } from "react";

interface SearchAreaProps {
  query: string;
  categoryName: string;
  categories: Category[];
}

export const SearchArea: React.FC<SearchAreaProps> = ({
  query,
  categoryName,
  categories,
}) => {
  const [searchWord, setSearchWord] = useState(query);
  const [selectedCategory, setSelectedCategory] = useState(categoryName);
  const router = useRouter();
  const onChangeSearchWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };
  const onChangeSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };
  const onSubmitSearchWord = () => {
    const query: ExploreQuery = {};
    if (searchWord) query.q = searchWord;
    if (selectedCategory) query.category = selectedCategory;
    router.push(
      `/explore?${new URLSearchParams(
        query as Record<string, string>
      ).toString()}`
    );
  };
  return (
    <div className="bg-teriary-light shadow rounded py-4 px-2">
      <div className="flex align-middle items-start rounded px-2 py-4">
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
      <div className=" px-2 py-4">
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
  );
};
