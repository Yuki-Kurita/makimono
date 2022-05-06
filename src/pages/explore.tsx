import { Layout } from "@/components/common/Layout";
import { client } from "@/lib/config/apolloClient";
import { FIND_ALL_CATEGORIES } from "@/lib/graphql/category/categoryQuery";
import {
  Category,
  FindAllCategoryQuery,
  FindAllCategoryQueryVariables,
} from "@/model/types";
import { GetStaticProps, NextPage } from "next";
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
  return (
    <Layout categories={categories}>
      <main className="bg-gray-100 border-b py-8">
        <h1 className="text-2xl font-bold mb-4 text-center">roadmaps</h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
      </main>
    </Layout>
  );
};

export default ExplorePage;
