import { Author } from "@/domain/author/Author";
import Image from "next/image";
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
    <article className="shadow-lg bg-white mb-3 w-10/12 max-w-xl py-4 px-3 ml-auto mr-auto rounded-lg">
      <Link href={`/roadmaps/${id}`}>
        <a>
          <h2 className="font-bold text-2xl mb-2 text-gray-600">{title}</h2>
        </a>
      </Link>
      <div className="mt-1 flex flex-nowrap items-center text-gray-600">
        <div>
          <Image src="/category.svg" width={20} height={20} alt={"category"} />
          <span className="mr-0.5 ml-0.5 align-top">{category}</span>
        </div>
        <div className="ml-2">
          <Image src="/tag.svg" width={20} height={20} alt={"tag"} />
          <span className="ml-0.5 align-top">
            {tags.map((tag) => `${tag} `)}
          </span>
        </div>
        <div className="ml-2">
          <Image src="/like.svg" width={20} height={20} alt={"like"} />
          <span className="ml-0.5 align-top">{likes}</span>
        </div>
      </div>
      <div className="flex flex-nowrap mt-2">
        <div className="text-md text-gray-500 mr-1">by {author.name}</div>
        <div className="text-md text-gray-500 ml-1">{updatedAt}</div>
        <div className="text-sm text-white bg-green-600 ml-3 px-2 py-1 rounded">{`${itemCount} STEP`}</div>
      </div>
    </article>
  );
};
