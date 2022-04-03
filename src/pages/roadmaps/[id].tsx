import Layout from "@/components/common/Layout";
import { client } from "@/lib/config/apolloClient";
import { FETCH_ALL_ROADMAP_IDS } from "@/lib/graphql/roadmapDetail/fetchAllRoadmapIds";
import { FETCH_ROADMAP_BY_ID } from "@/lib/graphql/roadmapDetail/fetchRoadmapById";
import {
  FetchAllRoadmapIdsQuery,
  FetchAllRoadmapIdsQueryVariables,
  FetchRoadmapByIdQuery,
  FetchRoadmapByIdQueryVariables,
  Roadmap,
} from "@/model/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "node:querystring";
import React from "react";

interface RoadmapDetailProps {
  roadmap: Roadmap;
}

interface RoadmapDetailPath extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<any, RoadmapDetailPath> = async ({
  params,
}) => {
  const id = params?.id;
  // TODO: idが取得できなかったケースのエラーハンドリング
  if (!id) {
    throw Error("Not found id");
  }
  const { data } = await client.query<
    FetchRoadmapByIdQuery,
    FetchRoadmapByIdQueryVariables
  >({ query: FETCH_ROADMAP_BY_ID, variables: { id } });
  const roadmap = data.findRoadmap[0];
  if (!roadmap) {
    throw new Error("Not found roadmap");
  }
  return {
    props: { roadmap },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data, error } = await client.query<
    FetchAllRoadmapIdsQuery,
    FetchAllRoadmapIdsQueryVariables
  >({ query: FETCH_ALL_ROADMAP_IDS });
  const paths = data.findRoadmap.map((roadmap) => ({
    params: { id: roadmap.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

const RoadmapDetailPage: NextPage<RoadmapDetailProps> = ({ roadmap }) => {
  return (
    <Layout>
      <main className="bg-gray-100 border-b py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold ml-3 mb-4 text-center">
            {roadmap.title}
          </h1>
          <div className="flex justify-center">
            <div className="text-sm text-gray-500 mr-1">
              by {roadmap.author.name}
            </div>
            <div className="text-sm text-gray-500 mr-1">
              {roadmap.updatedAt}
            </div>
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
        {/* {roadmap.items.map((it) => (
          <RoadMapItem
            title={it.title}
            link={it.links}
            comment={it.comment}
            order={it.order}
            key={it.title}
          />
        ))} */}
      </main>
    </Layout>
  );
};

export default RoadmapDetailPage;
