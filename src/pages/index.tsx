import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <div>header</div>
      <main>
        LP説明いろいろ
        <Link href="/explore">
          <a>Get Start</a>
        </Link>
      </main>
    </Layout>
  );
};

export default LandingPage;
