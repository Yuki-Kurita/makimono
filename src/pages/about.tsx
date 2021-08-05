import Layout from "@/components/common/Layout";
import RoadmapPost from "@/components/RoadmapPost";
import { Category } from "@/domain/category/Category";
import { Roadmap } from "@/domain/roadmap/Roadmap";
import { client } from "@/lib/config/apolloClient";
import { FIND_CATEGORIES } from "@/lib/graphql/categoryQuery";
import { FIND_LATEST_ROADMAPS } from "@/lib/graphql/roadmapQuery";
import { convertToPublishDate } from "@/util/convertToPublishDate";
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
      limit: 6,
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
        <h1 className="text-3xl font-extrabold mb-4 text-center text-gray-600">
          Latest
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {roadmaps &&
            roadmaps.map((roadmap) => (
              <RoadmapPost
                {...{
                  id: roadmap.id,
                  title: roadmap.title,
                  itemCount: roadmap.items ? roadmap.items.length : 0,
                  category: roadmap.category.name,
                  tags: roadmap.tags,
                  likes: roadmap.likes,
                  author: roadmap.author,
                  updatedAt: convertToPublishDate(roadmap.updatedAt),
                }}
                key={roadmap.id}
              />
            ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category) => category.name)}
        </div>
        <h1 className="text-3xl font-extrabold mb-4 text-center text-gray-600">
          Weekly Ranking
        </h1>
      </main>
    </Layout>
  );
};

export default ListPage;
