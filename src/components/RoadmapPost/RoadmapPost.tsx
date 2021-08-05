import { Author } from "@/domain/author/Author";
import Link from "next/link";
import React from "react";

interface RoadmapPostProps {
  id: string;
  title: string;
  itemCount: number;
  category: string;
  tags: string[];
  likes: number;
  author: Author;
  updatedAt: string;
}

export const RoadmapPost: React.VFC<RoadmapPostProps> = ({
  id,
  title,
  itemCount,
  category,
  tags,
  likes,
  author,
  updatedAt,
}) => {
  return (
    <article className="shadow-lg bg-white mb-3 w-10/12 py-4 px-3 ml-auto mr-auto rounded-lg">
      <Link href={`/roadmaps/${id}`}>
        <a>
          <h2 className="font-bold text-lg">{title}</h2>
        </a>
      </Link>
      <div className="mt-1 flex flex-nowrap text-gray-600">
        <svg
          className="w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
        <div className="mr-2 ml-0.5">{category}</div>
        <svg
          className="w-4 text-red-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <div className="ml-0.5">{likes}</div>
      </div>
      <div className="flex flex-nowrap mt-1">
        <div className="text-sm text-gray-500 mr-1">by {author.name}</div>
        <div className="text-sm text-gray-500 ml-1">{updatedAt}</div>
      </div>
    </article>
  );
};
