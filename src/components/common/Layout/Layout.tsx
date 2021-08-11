import Head from "next/head";
import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Tebiki | 体系化された学習の「手引き」をシェアするサービス</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
