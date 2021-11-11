import CategoryTips from "@/components/CategoryTips";
import Layout from "@/components/common/Layout";
import RoadmapPost from "@/components/RoadmapPost";
import { Category } from "@/domain/category/Category";
import { useRoadmapList } from "@/hooks/useRoadmapList";
import { client } from "@/lib/config/apolloClient";
import { FIND_ALL_CATEGORIES } from "@/lib/graphql/category/categoryQuery";
import { convertToPublishDate } from "@/util/convertToPublishDate";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";

interface ListPageProps {
  categories: Category[];
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: FIND_ALL_CATEGORIES,
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
        <div>
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
        </div>
        <Link href="/roadmaps/latest">
          <a className="block text-md font-extrabold mt-4 mb-2 mx-auto px-4 py-2 w-64 rounded-lg shadow text-center text-gray-600">
            最新のロードマップを見る→
          </a>
        </Link>
        <div className="mt-16">
          <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-600">
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
          <Link href="/roadmaps/ranking">
            <a className="block text-md font-extrabold mt-4 mb-2 mx-auto px-4 py-2 w-64 rounded-lg shadow text-center text-gray-600">
              人気のロードマップを見る→
            </a>
          </Link>
        </div>
        <div className="mt-16">
          <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-600">
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
                <Link href="/roadmaps/categories/programming">
                  <a className="block text-md font-extrabold mt-4 mb-2 mx-auto px-4 py-2 w-64 rounded-lg shadow text-center text-gray-600">
                    このカテゴリのロードマップを見る→
                  </a>
                </Link>
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
                <Link href="/roadmaps/categories/art">
                  <a className="block text-md font-extrabold mt-4 mb-2 mx-auto px-4 py-2 w-64 rounded-lg shadow text-center text-gray-600">
                    このカテゴリのロードマップを見る→
                  </a>
                </Link>
              </div>
            </div>
          </div>
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
