import Layout from "@/components/common/Layout";
import { RoadmapHeader } from "@/components/RoadmapDetail/RoadmapHeader";
import { RoadmapItems } from "@/components/RoadmapDetail/RoadmapItems";
import { SideContents } from "@/components/RoadmapDetail/SideContents";
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
      <main className="container mx-auto">
        <RoadmapHeader roadmap={roadmap} />
        <div className="flex justify-center">
          <RoadmapItems items={roadmap.items} />
          <SideContents roadmap={roadmap} />
        </div>
      </main>
    </Layout>
  );
};

export default RoadmapDetailPage;
