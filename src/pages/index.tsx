import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <main>
        LP説明いろいろ
        <Link href="/explore">
          <a>Get Start</a>
        </Link>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0"></div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-gray-500">You have a new message!</p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default LandingPage;
