import { Loading } from "@/components/common/Loading";
import { FETCH_USER_ROADMAP } from "@/lib/graphql/user/fetchUserRoadmap";
import {
  FindUserRoadmapQuery,
  FindUserRoadmapQueryVariables,
  Roadmap,
} from "@/model/types";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { UserRoadmapItem } from "./UserRoadmapItem";

type RoadmapInUserPage = "like" | "mine";

export const UserRoadmaps: React.FC = () => {
  const { data, error, loading } = useQuery<
    FindUserRoadmapQuery,
    FindUserRoadmapQueryVariables
  >(FETCH_USER_ROADMAP);
  const [roadmapType, setRoadmapType] = useState<RoadmapInUserPage>("mine");
  const onClickTab = () => {
    setRoadmapType((rt) => (rt === "like" ? "mine" : "like"));
  };
  return (
    <div className="basis-8/12">
      <ul className="flex font-bold text-center text-gray-500 rounded-lg">
        <li className="w-full">
          <button
            onClick={onClickTab}
            className={`inline-block w-1/2 active focus:outline-none py-2 ${
              roadmapType === "mine"
                ? "text-gray-900 border-b-2 border-gray-400"
                : "hover:text-gray-700 hover:border-b-2 hover:border-highlight"
            }`}
          >
            My roadmap
          </button>
        </li>
        <li className="w-full">
          <button
            onClick={onClickTab}
            className={`inline-block w-1/2 active focus:outline-none py-2 ${
              roadmapType === "like"
                ? "text-gray-900 border-b-2 border-gray-400"
                : "hover:text-gray-700 hover:border-b-2 hover:border-highlight"
            }`}
          >
            Favorite
          </button>
        </li>
      </ul>
      <div className="bg-white px-4 py-8 rounded-lg shadow">
        {loading ? (
          <Loading />
        ) : roadmapType === "mine" ? (
          data?.findMyRoadmap.map((roadmap) => (
            <UserRoadmapItem roadmap={roadmap as Roadmap} key={roadmap.id} />
          ))
        ) : (
          data?.findLikeRoadmap.map((roadmap) => (
            <UserRoadmapItem roadmap={roadmap as Roadmap} key={roadmap.id} />
          ))
        )}
      </div>
    </div>
  );
};
