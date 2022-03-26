import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import Layout from "@/components/common/Layout";
import { Loading } from "@/components/common/Loading";
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
import { useRouter } from "next/router";
import React from "react";
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
  const [postRoadmap, { data, loading, error }] = useMutation<
    PostRoadmapMutation,
    PostRoadmapMutationVariables
  >(POST_ROADMAP);

  const router = useRouter();
  const onClickTop = () => {
    router.push("/");
  };
  const onClickRoadmap = () => {
    // TODO: roadmap詳細のページに飛ばす
    router.push("/");
  };

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log(">>>", data);
    const args = postRoadmapArgBuilder(data);
    // postRoadmap({
    //   variables: args,
    // });
  };
  return (
    <Layout>
      <main className="py-8 mb-4">
        {data?.postRoadmap ? (
          <div className="flex justify-center">
            <Card>
              <div className="w-112">
                <div className="flex justify-center stroke-gray-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 stroke-lime-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="mb-6 font-normal text-gray-600 text-center">
                  <p>ロードマップの作成が完了しました！</p>
                </p>
                <div className="flex justify-around">
                  <Button onClick={onClickTop}>トップに戻る</Button>
                  <Button onClick={onClickRoadmap}>
                    ロードマップを確認する
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ) : loading ? (
          <Loading />
        ) : (
          <RoadmapForm categories={categories} onSubmit={onSubmit} />
        )}
      </main>
    </Layout>
  );
};

export default CreateRoadmapPage;
