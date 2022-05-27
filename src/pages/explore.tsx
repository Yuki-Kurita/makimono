import { Layout } from "@/components/common/Layout";
import { Loading } from "@/components/common/Loading";
import { SearchArea } from "@/components/Explore/SearchArea";
import { RoadmapPost } from "@/components/RoadmapPost/RoadmapPost";
import { client } from "@/lib/config/apolloClient";
import { FIND_ALL_CATEGORIES } from "@/lib/graphql/category/categoryQuery";
import { FETCH_FOR_EXPLORE } from "@/lib/graphql/explore/fetchForExploreQuery";
import { RoadmapOrder, RoadmapOrderBy } from "@/model/enum";
import type {
  Category,
  FetchForExploreQuery,
  FetchForExploreQueryVariables,
  FindAllCategoryQuery,
  FindAllCategoryQueryVariables,
} from "@/model/types";
import { useQuery } from "@apollo/client";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

interface ExplorePageProps {
  categories: Category[];
}

export interface ExploreQuery {
  q?: string;
  category?: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await client.query<
    FindAllCategoryQuery,
    FindAllCategoryQueryVariables
  >({
    query: FIND_ALL_CATEGORIES,
  });
  // TODO: error handling
  return {
    props: {
      categories: data.findAllCategories,
    },
  };
};

const ExplorePage: NextPage<ExplorePageProps> = ({ categories }) => {
  const router = useRouter();
  const { q, category, order, orderBy } = router.query;
  const categoryId = categories.find((c) => c.name === category)?.id;
  const variables: FetchForExploreQueryVariables = {
    limit: 18,
  };
  if (q) variables.query = q as string;
  if (categoryId) variables.categoryId = categoryId;
  if (order) {
    variables.order = order === "ASC" ? RoadmapOrder.Asc : RoadmapOrder.Desc;
  }
  if (orderBy) {
    if (orderBy === "updated_at") {
      variables.orderBy = RoadmapOrderBy.Updatedat;
    } else if (orderBy === "likes") {
      variables.orderBy = RoadmapOrderBy.Likes;
    }
  }
  const { data, loading, error } = useQuery<
    FetchForExploreQuery,
    FetchForExploreQueryVariables
  >(FETCH_FOR_EXPLORE, {
    variables,
  });

  if (loading) <Loading />;
  return (
    <Layout categories={categories}>
      <main className="py-8 container mx-auto">
        <SearchArea
          query={(q as string) || ""}
          categoryName={(category as string) || ""}
          categories={categories}
        />
        <div className="py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {data?.findRoadmap &&
              data.findRoadmap.map((roadmap) => (
                <RoadmapPost roadmap={roadmap} key={roadmap.id} />
              ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ExplorePage;
