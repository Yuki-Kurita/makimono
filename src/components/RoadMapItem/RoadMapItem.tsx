import Link from "next/link";
import React from "react";

interface RoadMapItemProps {
  title: string;
  link: string;
  comment: string;
  order: number;
}

const RoadMapItem: React.FC<RoadMapItemProps> = ({
  title,
  link,
  comment,
  order,
}) => {
  return (
    <div className="flex justify-center container mx-auto mb-8">
      <div className="flex justify-center items-center">
        <div className="boarder-2 h-10 w-10 mr-4 bg-indigo-600 text-white rounded-lg flex justify-center items-center">
          {order}
        </div>
      </div>
      <div className="shadow-lg bg-white  w-8/12 py-4 px-3 rounded-lg">
        <Link href={`${link}`}>
          <a>
            <h2 className="font-bold text-lg">{title}</h2>
          </a>
        </Link>
        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-5">{comment}</div>
          <div className="col-span-1">
            <button
              type="button"
              className="border border-green-700 text-green-700 rounded-md px-4 py-2  transition duration-500 ease select-none hover:text-white hover:bg-green-700 focus:outline-none focus:shadow-outline"
            >
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMapItem;
