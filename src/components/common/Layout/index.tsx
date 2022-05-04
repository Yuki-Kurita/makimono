import { GET_AUTHOR_BY_ID } from "@/lib/graphql/author/getAuthorById";
import { GetAuthorByIdQuery, GetAuthorByIdQueryVariables } from "@/model/types";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import React from "react";
import Footer from "../Footer";
import Header from "../Header";

export const Layout: React.FC = ({ children }) => {
  const { data, loading, error, refetch } = useQuery<
    GetAuthorByIdQuery,
    GetAuthorByIdQueryVariables
  >(GET_AUTHOR_BY_ID);
  return (
    <div className="bg-teriary text-gray">
      <Head>
        <title>Tebiki | 体系化された学習の「手引き」をシェアするサービス</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
