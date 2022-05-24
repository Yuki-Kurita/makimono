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
    <div className="bg-teriary-light shadow rounded py-4 px-2 max-w-3xl mx-auto">
      <div className="mx-auto pt-4">
        <div className="relative rounded px-2 py-4 mx-auto max-w-lg">
          <input
            type="text"
            value={searchWord}
            onChange={onChangeSearchWord}
            className="border-2 border-gray-300 bg-white w-full h-12 px-5 pr-16 rounded-lg text-lg focus:outline-none"
            placeholder="Search roadmaps"
          />
          <button
            className="absolute right-2 top-2 mt-5 mr-4"
            onClick={onSubmitSearchWord}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-500 h-6 w-6 fill-curren"
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
          </button>
        </div>
        <div className="px-2 py-4 mx-auto max-w-lg">
          <select
            className="border-2 border-gray-300 block text-gray-500 appearance-none w-full py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
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
  );
};
