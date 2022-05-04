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
      limit: 6,
    },
  });

  if (loading) <h3>loading...</h3>;

  return (
    <Layout>
      <main>
        <div className="py-8">
          <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-600">
            Latest
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {data?.findLatestRoadmap &&
              data?.findLatestRoadmap.map((roadmap) => (
                <RoadmapPost roadmap={roadmap} key={roadmap.id} />
              ))}
          </div>
          <MoreButton href="/roadmaps/latest">
            最新のロードマップを見る→
          </MoreButton>
        </div>
        <div className="py-8 bg-teriary-light">
          <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-600">
            Weekly Ranking
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {data?.findLatestRoadmap &&
              data?.findLatestRoadmap.map((roadmap) => (
                <RoadmapPost roadmap={roadmap} key={roadmap.id} />
              ))}
          </div>
          <MoreButton href="/roadmaps/ranking">
            人気のロードマップを見る→
          </MoreButton>
        </div>
        <div className="py-8">
          <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-600">
            Featured Category
          </h1>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div>
                <h2 className="text-xl font-extrabold mt-4 mb-4 text-center text-gray-500">
                  Programming
                </h2>
                {data?.findProgrammingRoadmap &&
                  data?.findProgrammingRoadmap.map((roadmap) => (
                    <RoadmapPost roadmap={roadmap} key={roadmap.id} />
                  ))}
                <MoreButton href="/roadmaps/categories/programming">
                  このカテゴリのロードマップを見る→
                </MoreButton>
              </div>
              <div>
                <h2 className="text-xl font-extrabold mt-4 mb-4 text-center text-gray-500">
                  Art
                </h2>
                {data?.findArtRoadmap &&
                  data?.findArtRoadmap.map((roadmap) => (
                    <RoadmapPost roadmap={roadmap} key={roadmap.id} />
                  ))}
                <MoreButton href="/roadmaps/categories/art">
                  このカテゴリのロードマップを見る→
                </MoreButton>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 bg-teriary-light">
          <h2 className="text-xl font-extrabold mt-6 mb-4 text-center text-gray-500">
            All Categories
          </h2>
          <div className="mb-6 px-20">
            <CategoryTips categories={categories} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ListPage;
