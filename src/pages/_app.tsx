import Auth from "@/components/common/Auth";
import { client } from "@/lib/config/apolloClient";
import store from "@/store";
import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { Provider } from "react-redux";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="description"
              content="Tebikiは、様々な学習や知識の「手引き」を作成し、みんなでシェアすることができるサービスです。"
            />
            {/* OGP */}
            <meta property="og:title" content="ページの タイトル" />
            <meta
              property="og:description"
              content="ページのディスクリプション"
            />
            <meta property="og:type" content="ページの種類" />
            <meta property="og:url" content="ページの URL" />
            <meta property="og:image" content="サムネイル画像の URL" />
            <meta property="og:site_name" content="サイト名" />
            <meta property="og:locale" content="ja_JP" />
          </Head>
          <Auth>
            <Component {...pageProps} />
          </Auth>
        </ApolloProvider>
      </Provider>
    </>
  );
};

export default MyApp;
