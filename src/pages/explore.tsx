import Layout from "@/components/common/Layout";
import Post from "@/components/Post";
import ApiClient from "@/lib/ApiClient";
import GuideResponse from "@/lib/GuideResponse";
import { GetStaticProps } from "next";
import React from "react";

interface ExplorePageProps {
  guides: GuideResponse[];
}

export const getStaticProps: GetStaticProps = async () => {
  const guides = await ApiClient.fetchGuides();
  return {
    props: { guides },
  };
};

const ExplorePage: React.FC<ExplorePageProps> = ({ guides }) => {
  return (
    <Layout>
      <main className="bg-gray-100 border-b py-8">
        <h1 className="text-2xl font-bold mb-4 text-center">roadmaps</h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {guides &&
            guides.map((guide) => (
              <Post
                title={guide.title}
                publisher={guide.publisher}
                publishedAt={guide.publishedAt}
                like={guide.like}
                type={guide.type}
                category={guide.category}
                id={guide.id}
                key={guide.id}
              />
            ))}
        </div>
      </main>
    </Layout>
  );
};

export default ExplorePage;
