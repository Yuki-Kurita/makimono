import { RoadmapFieldsFragment } from "@/model/types";
import { convertToPublishDate } from "@/util/convertToPublishDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface RoadmapPostProps {
  roadmap: RoadmapFieldsFragment;
}

export const RoadmapPost: React.VFC<RoadmapPostProps> = ({ roadmap }) => {
  return (
    <article className="shadow-lg mb-6 w-10/12 max-w-xl ml-auto mr-auto rounded-b-lg">
      <div className="h-6 bg-highlight relative">
        <div className="absolute -left-3 top-1 w-2 h-3 bg-amber-900 rounded-l-lg"></div>
        <div className="absolute -left-1 w-1 h-6 bg-amber-400"></div>
        <div className="absolute -right-3 top-1 w-2 h-3 bg-amber-900 rounded-r-lg"></div>
        <div className="absolute -right-1 w-1 h-6 bg-amber-400"></div>
      </div>
      <div className="py-4 px-3 border-4 border-highlight rounded-b-lg">
        <Link href={`/roadmaps/${roadmap.id}`}>
          <a>
            <h2 className="font-bold text-2xl mb-2 text-gray-600">
              {roadmap.title}
            </h2>
          </a>
        </Link>
        <div className="mt-1 flex flex-nowrap items-center text-gray-600">
          <div>
            <Image
              src="/category.svg"
              width={20}
              height={20}
              alt={"category"}
            />
            <span className="mr-0.5 ml-0.5 align-top">
              {roadmap.category.name}
            </span>
          </div>
          <div className="ml-2 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-amber-300 text-amber-400"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <span className="ml-0.5 align-top">{roadmap.likes}</span>
          </div>
        </div>
        <div className="flex flex-nowrap mt-2">
          <div className="text-md text-gray-500 mr-2">
            by {roadmap.author.name}
          </div>
          <div className="mr-2">
            <Image
              className="inline object-cover w-8 h-8 rounded-full border-2 border-gray-500"
              src={
                roadmap.author.iconUrl ? roadmap.author.iconUrl : "/like.svg"
              }
              width={25}
              height={25}
              alt="Profile image"
            />
          </div>
          <div className="text-md text-gray-500 ml-1">
            {convertToPublishDate(roadmap.updatedAt)}
          </div>
          <div className="text-sm text-white bg-green-600 ml-3 px-2 py-1 rounded">{`${
            roadmap.items ? roadmap.items.length : 0
          } STEP`}</div>
        </div>
      </div>
    </article>
  );
};
