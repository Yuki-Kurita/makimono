import { User } from "@/domain/user/User";
import Image from "next/image";
import React from "react";

interface ProfileProps {
  user: User;
}

export const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="bg-white px-4 py-8 rounded-lg shadow basis-4/12 flex justify-center flex-col h-72">
      <button className="w-16 px-2 text-center mb-2 rounded ml-auto shadow shadow-gray-400">
        Edit
      </button>
      <div className="flex justify-center mb-2">
        <Image
          className="inline object-cover w-16 h-16 rounded-full border-2 border-gray-500"
          src={user.iconUrl ? user.iconUrl : "/noimage.svg"}
          width={50}
          height={50}
          alt="Profile image"
        />
      </div>
      <div className="text-center text-xl font-semibold pb-4 mb-4 border-b border-gray-300 w-3/4 mx-auto">
        {user.name}
      </div>
      <div className="flex justify-around">
        <div className="w-1/2 text-center border-r border-gray-300">
          <div className="font-bold">1</div>
          <div className="text-gray-500">投稿数</div>
        </div>
        <div className="w-1/2 text-center">
          <div className="font-bold">1</div>
          <div className="text-gray-500">総いいね数</div>
        </div>
      </div>
    </div>
  );
};
