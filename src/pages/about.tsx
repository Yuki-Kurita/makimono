import Layout from "@/components/Layout";
import { Category } from "@/domain/category/Category";
import { Roadmap } from "@/domain/roadmap/Roadmap";
import { client } from "@/lib/config/apolloClient";
import { FIND_CATEGORIES } from "@/lib/graphql/categoryQuery";
import { FIND_LATEST_ROADMAPS } from "@/lib/graphql/roadmapQuery";
import { useQuery } from "@apollo/client";
import { GetStaticProps, NextPage } from "next";

interface ListPageProps {
  categories: Category[];
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: FIND_CATEGORIES,
  });
  return {
    props: {
      categories: data.findAllCategories,
    },
  };
};

const ListPage: NextPage<ListPageProps> = ({ categories }) => {
  const { data, loading, error } = useQuery(FIND_LATEST_ROADMAPS, {
    variables: {
      limit: 10,
    },
  });
  if (loading) <h3>loading...</h3>;
  if (error) {
    console.error(error);
    return null;
  }
  console.log(data);
  const roadmaps: Roadmap[] = data?.findRoadmap;

  return (
    <Layout>
      <main className="bg-gray-100 border-b py-8">
        <h1 className="text-2xl font-bold mb-4 text-center">roadmaps</h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <h2>新着</h2>
        <h1>{roadmaps && roadmaps.map((roadmap) => roadmap.title)}</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category) => category.name)}
        </div>
      </main>
    </Layout>
  );
};

export default ListPage;
