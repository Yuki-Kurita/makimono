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
    <article className="shadow-lg bg-white mb-3 w-10/12 max-w-xl py-4 px-3 ml-auto mr-auto rounded-lg">
      <Link href={`/roadmaps/${roadmap.id}`}>
        <a>
          <h2 className="font-bold text-2xl mb-2 text-gray-600">
            {roadmap.title}
          </h2>
        </a>
      </Link>
      <div className="mt-1 flex flex-nowrap items-center text-gray-600">
        <div>
          <Image src="/category.svg" width={20} height={20} alt={"category"} />
          <span className="mr-0.5 ml-0.5 align-top">
            {roadmap.category.name}
          </span>
        </div>
        <div className="ml-2">
          <Image src="/like.svg" width={20} height={20} alt={"like"} />
          <span className="ml-0.5 align-top">{roadmap.likes}</span>
        </div>
      </div>
      <div className="flex flex-nowrap mt-2">
        <div className="text-md text-gray-500 mr-1">
          by {roadmap.author.name}
        </div>
        <div className="text-md text-gray-500 ml-1">
          {convertToPublishDate(roadmap.updatedAt)}
        </div>
        <div className="text-sm text-white bg-green-600 ml-3 px-2 py-1 rounded">{`${
          roadmap.items ? roadmap.items.length : 0
        } STEP`}</div>
      </div>
    </article>
  );
};
