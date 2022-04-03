import Layout from "@/components/common/Layout";
import { NextPage } from "next";
import React from "react";

const ExplorePage: NextPage = () => {
  return (
    <Layout>
      <main className="bg-gray-100 border-b py-8">
        <h1 className="text-2xl font-bold mb-4 text-center">roadmaps</h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
      </main>
    </Layout>
  );
};

export default ExplorePage;
