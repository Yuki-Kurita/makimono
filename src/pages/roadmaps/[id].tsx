import { Layout } from "@/components/common/Layout";
import { Loading } from "@/components/common/Loading";
import { RoadmapHeader } from "@/components/RoadmapDetail/RoadmapHeader";
import { RoadmapItems } from "@/components/RoadmapDetail/RoadmapItems";
import { SideContents } from "@/components/RoadmapDetail/SideContents";
import { client } from "@/lib/config/apolloClient";
import { FIND_ALL_CATEGORIES } from "@/lib/graphql/category/categoryQuery";
import { FETCH_ALL_ROADMAP_IDS } from "@/lib/graphql/roadmapDetail/fetchAllRoadmapIds";
import { FETCH_ROADMAP_BY_ID } from "@/lib/graphql/roadmapDetail/fetchRoadmapById";
import {
  Category,
  FetchAllRoadmapIdsQuery,
  FetchAllRoadmapIdsQueryVariables,
  FetchRoadmapByIdQuery,
  FetchRoadmapByIdQueryVariables,
  FindAllCategoryQuery,
  FindAllCategoryQueryVariables,
  Like,
  Roadmap,
} from "@/model/types";
import { useQuery } from "@apollo/client";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "node:querystring";
import React from "react";

interface RoadmapDetailProps {
  id: string;
  categories: Category[];
}

interface RoadmapDetailPath extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<any, RoadmapDetailPath> = async ({
  params,
}) => {
  const { data, error } = await client.query<
    FindAllCategoryQuery,
    FindAllCategoryQueryVariables
  >({
    query: FIND_ALL_CATEGORIES,
  });
  const id = params?.id;
  // TODO: idが取得できなかったケースのエラーハンドリング
  if (!id) {
    throw Error("Not found id");
  }
  return {
    props: { id, categories: data.findAllCategories },
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

const RoadmapDetailPage: NextPage<RoadmapDetailProps> = ({
  id,
  categories,
}) => {
  const { data, loading, refetch } = useQuery<
    FetchRoadmapByIdQuery,
    FetchRoadmapByIdQueryVariables
  >(FETCH_ROADMAP_BY_ID, { variables: { id } });
  return (
    <Layout categories={categories}>
      <main className="container mx-auto">
        {loading ? (
          <Loading />
        ) : data ? (
          <>
            <RoadmapHeader roadmap={data.findRoadmap[0] as Roadmap} />
            <div className="flex justify-center">
              <RoadmapItems items={data?.findRoadmap[0].items} />
              <SideContents
                roadmap={data.findRoadmap[0] as Roadmap}
                likeByMe={data.fetchIsLikedByMe as (Like | undefined)[]}
                refetchRoadmap={refetch}
              />
            </div>
          </>
        ) : (
          <div></div>
        )}
      </main>
    </Layout>
  );
};

export default RoadmapDetailPage;
