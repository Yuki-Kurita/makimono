import { Layout } from "@/components/common/Layout";
import { Profile } from "@/components/User/Profile";
import { UserRoadmaps } from "@/components/User/UserRoadmaps";
import { client } from "@/lib/config/apolloClient";
import { GET_ALL_AUTHOR_IDS } from "@/lib/graphql/author/getAllAuthorIds";
import { FIND_ALL_CATEGORIES } from "@/lib/graphql/category/categoryQuery";
import {
  Category,
  FindAllCategoryQuery,
  FindAllCategoryQueryVariables,
  GetAllAuthorsQuery,
  GetAllAuthorsQueryVariables,
} from "@/model/types";
import { useAppSelector } from "@/store/hooks";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";

interface UserPageProps {
  categories: Category[];
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data, error } = await client.query<
    FindAllCategoryQuery,
    FindAllCategoryQueryVariables
  >({
    query: FIND_ALL_CATEGORIES,
  });
  const id = params?.id;
  return {
    props: { id, categories: data.findAllCategories },
  };
};

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

const UserPage: NextPage<UserPageProps> = ({ categories }) => {
  const user = useAppSelector((state) => state.user);
  return (
    <Layout categories={categories}>
      <main className="container mx-auto mt-6 flex gap-8">
        <Profile user={user} />
        <UserRoadmaps />
      </main>
    </Layout>
  );
};

export default UserPage;
