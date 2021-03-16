import Layout from "@/components/Layout";
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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ExplorePage = ({ guides }: ExplorePageProps) => {
  return (
    <Layout>
      <main className="bg-gray-100 border-b py-8">
        <h1>roadmaps</h1>
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
                key={guide.id}
              />
            ))}
        </div>
      </main>
    </Layout>
  );
};

export default ExplorePage;
