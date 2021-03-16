import Layout from "@/components/Layout";
import ApiClient from "@/lib/ApiClient";
import RoadmapResponse from "@/lib/RoadmapResponse";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

interface RoadmapDetailPageProps {
  roadmap: RoadmapResponse;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;
  const roadmap = await ApiClient.fetchRoadmap(Number(id));
  return {
    props: { roadmap },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const roadmaps = await ApiClient.fetchGuides();
  const paths = roadmaps.map((roadmap) => ({
    params: { id: String(roadmap.id) },
  }));
  return {
    paths,
    fallback: false,
  };
};

const RoadmapDetailPage = ({ roadmap }: RoadmapDetailPageProps) => {
  return (
    <Layout>
      <main className="bg-gray-100 border-b py-8">
        <h1 className="text-2xl font-bold ml-3 mb-4">{roadmap.title}</h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        {roadmap.category}
      </main>
    </Layout>
  );
};

export default RoadmapDetailPage;
