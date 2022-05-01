import Layout from "@/components/common/Layout";
import { client } from "@/lib/config/apolloClient";
import { GET_ALL_AUTHOR_IDS } from "@/lib/graphql/author/getAllAuthorIds";
import { GetAllAuthorsQuery, GetAllAuthorsQueryVariables } from "@/model/types";
import { GetStaticPaths } from "next";
import React from "react";

export const getStaticPaths: GetStaticPaths = async () => {
  const { data, error } = await client.query<
    GetAllAuthorsQuery,
    GetAllAuthorsQueryVariables
  >({ query: GET_ALL_AUTHOR_IDS });
  const paths = data.getAllAuthors.map((author) => ({
    params: { id: author.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

const UserPage: React.FC = () => {
  return (
    <Layout>
      <main>
        <h2>投稿したロードマップ一覧</h2>
        {/* TODO: 編集・削除等の操作はここで行う */}
        <h2>プロフィールの修正</h2>
      </main>
    </Layout>
  );
};

export default UserPage;
