import { AuthContext } from "@/components/common/Auth/Auth";
import Layout from "@/components/common/Layout";
import { UserRoadmaps } from "@/components/User/UserRoadmaps";
import { client } from "@/lib/config/apolloClient";
import { GET_ALL_AUTHOR_IDS } from "@/lib/graphql/author/getAllAuthorIds";
import { GetAllAuthorsQuery, GetAllAuthorsQueryVariables } from "@/model/types";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useContext } from "react";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  return {
    props: { id },
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

const UserPage: React.FC = () => {
  const user = useContext(AuthContext);
  return (
    <Layout>
      <main className="container mx-auto mt-6 flex gap-8">
        {/* <Profile user={user} /> */}
        <UserRoadmaps />
      </main>
    </Layout>
  );
};

export default UserPage;
