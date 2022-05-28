import CategoryTips from "@/components/CategoryTips";
import { Layout } from "@/components/common/Layout";
import { MoreButton } from "@/components/common/MoreButton";
import { RoadmapPost } from "@/components/RoadmapPost/RoadmapPost";
import { client } from "@/lib/config/apolloClient";
import { FIND_ALL_CATEGORIES } from "@/lib/graphql/category/categoryQuery";
import { FETCH_FOR_TOP } from "@/lib/graphql/top/fetchForTopQuery";
import {
  Category,
  FetchForTopQuery,
  FetchForTopQueryVariables,
  FindAllCategoryQuery,
  FindAllCategoryQueryVariables,
} from "@/model/types";
import { useQuery } from "@apollo/client";
import { GetStaticProps, NextPage } from "next";

interface ListPageProps {
  categories: Category[];
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

const ListPage: NextPage<ListPageProps> = ({ categories }) => {
  const { data, loading, error } = useQuery<
    FetchForTopQuery,
    FetchForTopQueryVariables
  >(FETCH_FOR_TOP, {
    variables: {
      limit: 9,
    },
  });

  if (loading) <h3>loading...</h3>;

  return (
    <Layout categories={categories}>
      <main className="">
        <div className="py-8 mx-auto container">
          <h1 className="text-3xl font-extrabold mb-6 text-left md:pl-20 pl-10 text-gray-600">
            Trend
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {data?.findLatestRoadmap &&
              data?.findLatestRoadmap
                // Pagination時にキャッシュが残った時の対応
                .slice(0, 9)
                .map((roadmap) => (
                  <RoadmapPost roadmap={roadmap} key={roadmap.id} />
                ))}
          </div>
          <MoreButton href="/explore?orderBy=likes&order=DESC">
            人気のロードマップを見る→
          </MoreButton>
        </div>
        <div className="py-8 bg-teriary-light">
          <div className="mx-auto container">
            <h1 className="text-3xl font-extrabold mb-6 text-left md:pl-20 pl-10 text-gray-600">
              Latest
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {data?.findLatestRoadmap &&
                data?.findLatestRoadmap
                  .slice(0, 9)
                  .map((roadmap) => (
                    <RoadmapPost roadmap={roadmap} key={roadmap.id} />
                  ))}
            </div>
            <MoreButton href="/explore?orderBy=updated_at&order=DESC">
              最新のロードマップを見る→
            </MoreButton>
          </div>
          <div className="py-4 bg-teriary-light">
            <h2 className="text-xl font-extrabold mt-6 mb-4 text-center text-gray-500">
              All Categories
            </h2>
            <div className="px-20">
              <CategoryTips categories={categories} />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ListPage;
