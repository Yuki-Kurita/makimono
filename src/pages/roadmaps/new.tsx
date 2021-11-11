import Layout from "@/components/common/Layout";
import RoadmapForm from "@/components/RoadMapForm";
import { FormData } from "@/components/RoadMapForm/RoadmapForm";
import { useCreateRoadmap } from "@/hooks/useCreateRoadmap";
import { postRoadmapArgBuilder } from "@/lib/graphql/roadmap/postRoadmapArgBuilder";
import React from "react";
import { SubmitHandler } from "react-hook-form";

const CreateRoadmapPage: React.VFC = () => {
  const { postRoadmap, categories, loading, errors } = useCreateRoadmap();

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    const args = postRoadmapArgBuilder(data);
    postRoadmap({ variables: args });
  };
  return (
    <Layout>
      <main className="bg-gray-100 border-b py-8">
        <h1 className="text-2xl font-bold mb-4 text-center">
          ロードマップ作成
        </h1>
        <RoadmapForm categories={categories} onSubmit={onSubmit} />
      </main>
    </Layout>
  );
};

export default CreateRoadmapPage;
