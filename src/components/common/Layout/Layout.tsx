import Head from "next/head";
import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Tebiki | 体系化された学習の「手引き」をシェアするサービス</title>
      </Head>
      <Header />
      <body>{children}</body>
      <Footer />
    </div>
  );
};

export default Layout;
