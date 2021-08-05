import Layout from "@/components/common/Layout";
import RoadmapPost from "@/components/RoadmapPost";
import { Category } from "@/domain/category/Category";
import { useRoadmapList } from "@/hooks/useRoadmapList";
import { client } from "@/lib/config/apolloClient";
import { FIND_CATEGORIES } from "@/lib/graphql/categoryQuery";
import { convertToPublishDate } from "@/util/convertToPublishDate";
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
  const {
    latestRoadmaps,
    programmingRoadmaps,
    artRoadmaps,
    loading,
    errors,
  } = useRoadmapList();
  if (loading) <h3>loading...</h3>;

  return (
    <Layout>
      <main className="bg-gray-100 border-b py-8">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-600">
          Latest
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {latestRoadmaps &&
            latestRoadmaps.map((roadmap) => (
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
        <h1 className="text-3xl font-extrabold mt-12 mb-6 text-center text-gray-600">
          Weekly Ranking
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {latestRoadmaps &&
            latestRoadmaps.map((roadmap) => (
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
        <h1 className="text-3xl font-extrabold mt-12 mb-6 text-center text-gray-600">
          Featured Category
        </h1>
        <div className="flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div>
              <h2 className="text-xl font-extrabold mt-4 mb-4 text-center text-gray-500">
                Programming
              </h2>
              {programmingRoadmaps &&
                programmingRoadmaps.map((roadmap) => (
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
            <div>
              <h2 className="text-xl font-extrabold mt-4 mb-4 text-center text-gray-500">
                Art
              </h2>
              {artRoadmaps &&
                artRoadmaps.map((roadmap) => (
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
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ListPage;
