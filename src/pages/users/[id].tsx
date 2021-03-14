import Layout from "@/components/Layout";
import React from "react";

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
