import { Category } from "@/model/types";
import Head from "next/head";
import React from "react";
import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children: React.ReactNode;
  categories: Category[];
}

export const Layout: React.FC<LayoutProps> = ({ children, categories }) => {
  return (
    <div className="bg-teriary text-gray">
      <Head>
        <title>Tebiki | 体系化された学習の「手引き」をシェアするサービス</title>
      </Head>
      <Header categories={categories} />
      <div id="searchModal"></div>
      {children}
      <Footer />
    </div>
  );
};
