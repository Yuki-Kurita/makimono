import { Roadmap } from "@/model/types";
import dayjs from "dayjs";
import Image from "next/image";

interface RoadmapHeaderProps {
  roadmap: Roadmap;
}

export const RoadmapHeader: React.VFC<RoadmapHeaderProps> = ({ roadmap }) => {
  const convertDateTime = (timestamp: string) => {
    return dayjs(timestamp).format("YYYY/MM/DD");
  };
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-center py-8 px-4">
        {roadmap.title}
      </h1>
      <div className="flex justify-center text-lightGray">
        <div className="mr-1">by {roadmap.author.name}</div>
        <div className="mr-4">
          <Image
            src={roadmap.author.iconUrl || "/noimage.svg"}
            className="inline object-cover w-10 h-10 rounded-full border-2 border-gray-500"
            width={25}
            height={25}
            alt="user_icon"
          />
        </div>
        <div>更新日 : {convertDateTime(roadmap.updatedAt)}</div>
      </div>
      <div className="flex justify-center">
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
        <div className="mr-2 ml-0.5">{roadmap.category.name}</div>
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
        <div className="ml-0.5">{roadmap.likes}</div>
      </div>
    </div>
  );
};
