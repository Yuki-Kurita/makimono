import Layout from "@/components/common/Layout";
import { FormData, RoadmapForm } from "@/components/RoadMapForm/RoadmapForm";
import { client } from "@/lib/config/apolloClient";
import { FIND_ALL_CATEGORIES } from "@/lib/graphql/category/categoryQuery";
import { postRoadmapArgBuilder } from "@/lib/graphql/roadmap/postRoadmapArgBuilder";
import { POST_ROADMAP } from "@/lib/graphql/roadmap/roadmapMutation";
import {
  Category,
  FindAllCategoryQuery,
  FindAllCategoryQueryVariables,
  PostRoadmapMutation,
  PostRoadmapMutationVariables,
} from "@/model/types";
import { useMutation } from "@apollo/client";
import { GetStaticProps, NextPage } from "next";
import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";

interface NewPageProps {
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

const CreateRoadmapPage: NextPage<NewPageProps> = ({ categories }) => {
  const [isCreated, setIsCreated] = useState(false);
  const [postRoadmap, { data, loading, error }] = useMutation<
    PostRoadmapMutation,
    PostRoadmapMutationVariables
  >(POST_ROADMAP);

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    const args = postRoadmapArgBuilder(data);
    postRoadmap({
      variables: args,
      onCompleted() {
        console.log("completed");
        setIsCreated(true);
      },
    });
  };
  return (
    <Layout>
      <main className="bg-gray-100 border-b py-8">
        {isCreated ? (
          <>ロードマップ作成完了</>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4 text-center">
              ロードマップ作成
            </h1>
            <RoadmapForm categories={categories} onSubmit={onSubmit} />
          </>
        )}
      </main>
    </Layout>
  );
};

export default CreateRoadmapPage;
