import Footer from "@/components/common/Footer";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LandingPage: NextPage = () => {
  return (
    <>
      <div className="gradient leading-relaxed tracking-wide flex flex-col">
        <nav id="header" className="w-full z-30 top-0 text-white py-1 lg:py-6">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
            <div className="pl-5 flex items-center">
              <Link href="/">
                <a className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                  makimono
                </a>
              </Link>
            </div>
            <div
              className="w-auto flex-grow flex items-center mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20"
              id="nav-content"
            >
              <ul className="list-reset flex justify-end flex-1 items-center">
                <li className="mr-3">
                  <Link href="/">
                    <a className="inline-block py-2 px-4 text-black font-bold no-underline">
                      Get start
                    </a>
                  </Link>
                </li>
              </ul>
              <button
                id="navAction"
                className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded  lg:mt-0 py-4 px-8 shadow opacity-75"
              >
                Sign in
              </button>
            </div>
          </div>
        </nav>

        <div className="container mx-auto">
          <div className="text-center px-3 py-8 lg:px-0">
            <h1 className="my-4 mb-8 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
              有益で体系化された情報を、あなたに
            </h1>
            <p className="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8 pb-4">
              makimonoはプログラミング学習・インプットを効率化させる
              <br />
              <span className="font-semibold">ロードマップ</span>と
              <span className="font-semibold">コレクション</span>
              を共有し合うサービスです
            </p>
          </div>
        </div>

        <section className="bg-gray-100 border-b py-8">
          <div className="container max-w-5xl mx-auto m-8">
            <h2
              className="w-full my-2 text-4xl font-black leading-tight text-center text-gray-800"
              id="makimono-feature"
            >
              makimonoの特徴
            </h2>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <p className="text-lg text-center text-gray-600 font-semibold px-6">
              makimonoはロードマップ・コレクションを作成し、共有することができます
            </p>
            <p className="text-lg text-center text-gray-600 py-2 mb-3 font-semibold px-6">
              気に入った投稿は「いいね」をして後から学習に役立てれます
            </p>
            <div className="flex flex-col py-4 gap-4">
              <div className="md:flex mx-auto md:mx-0 justify-around mb-8 gap-8">
                <div className="rounded-2xl bg-slate-300 px-4 py-8 shadow flex flex-col justify-center w-96 mb-8 md:mb-0">
                  <div className="mx-auto py-2">
                    <Image
                      src="/roadmap.svg"
                      width={300}
                      height={200}
                      alt="ロードマップ"
                    />
                  </div>
                  <div className="text-lg font-black text-gray-500 text-center py-1">
                    プログラミングスキル習得のロードマップ
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-300 px-4 py-8 shadow flex flex-col justify-center w-96 mb-8 md:mb-0">
                  <div className="mx-auto py-2">
                    <Image
                      src="/collection.svg"
                      width={300}
                      height={200}
                      alt="コレクション"
                    />
                  </div>
                  <div className="text-lg font-black text-gray-500 text-center py-1">
                    気になる技術のコレクション
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-300 px-4 py-8 shadow flex flex-col justify-center w-96">
                  <div className="mx-auto py-2">
                    <Image
                      src="/fav.svg"
                      width={300}
                      height={200}
                      alt="お気に入り"
                    />
                  </div>
                  <div className="text-lg font-black text-gray-500 text-center py-1">
                    学習に使いたい投稿は「いいね」をして後から見返そう
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white border-b py-8">
          <div className="container mx-auto pt-4 pb-12">
            <h2
              className="w-full my-2 text-3xl font-black leading-tight text-center text-gray-800"
              id="persona"
            >
              こんな人におすすめ
            </h2>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="md:flex justify-center gap-6 px-2 pt-2 items-center">
              <div className="flex justify-center py-4 md:py-0">
                <Image src="/study.svg" width={200} height={200} alt="study" />
              </div>
              <div className="flex flex-col px-4 md:px-0">
                <div className="py-2">
                  <label className="text-lg">
                    <input
                      type="checkbox"
                      checked={true}
                      readOnly
                      className="accent-amber-400 w-6 h-6"
                    />
                    <span className="ml-3 text-gray-500">
                      プログラミングのブログ記事などをブックマークしたものの整理がうまくいかない人
                    </span>
                  </label>
                </div>
                <div className="py-2">
                  <label className="text-lg">
                    <input
                      type="checkbox"
                      checked={true}
                      readOnly
                      className="accent-amber-400 w-6 h-6"
                    />
                    <span className="ml-3 text-gray-500">
                      効率よくプログラミングの学習・インプットを行いたい人
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 border-b py-8">
          <div className="container max-w-5xl mx-auto m-8">
            <h2
              className="w-full my-2 text-4xl font-black leading-tight text-center text-gray-800"
              id="how-to-use"
            >
              How to use
            </h2>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="flex flex-col py-4 gap-4">
              <div className="md:flex mx-auto md:mx-0 md:justify-around justify-center mb-8 gap-8">
                <div className="rounded-2xl bg-slate-300 px-4 py-8 shadow flex flex-col justify-center w-96 mb-8 md:mb-0">
                  <div className="rounded-full bg-amber-500 text-lg text-gray-100 font-semibold px-3 py-1 text-center mx-auto mb-4">
                    1
                  </div>
                  <div className="text-lg font-black text-gray-500 text-center py-1">
                    ある技術のリンクや情報をまとめた、あなただけのmakimonoを作成しよう
                  </div>
                  <div className="mx-auto py-2">
                    <Image
                      src="/collection_2.svg"
                      width={300}
                      height={200}
                      alt="ロードマップ"
                    />
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-300 px-4 py-8 shadow flex flex-col justify-center w-96 mb-8 md:mb-0">
                  <div className="rounded-full bg-amber-500 text-lg text-gray-100 font-semibold px-3 py-1 text-center mx-auto mb-4">
                    2
                  </div>
                  <div className="text-lg font-black text-gray-500 text-center py-1">
                    makimonoをみんなに共有しよう
                  </div>
                  <div className="mx-auto py-2">
                    <Image
                      src="/share.svg"
                      width={300}
                      height={200}
                      alt="シェア"
                    />
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-300 px-4 py-8 shadow flex flex-col justify-center w-96 mb-8 md:mb-0">
                  <div className="rounded-full bg-amber-500 text-lg text-gray-100 font-semibold px-3 py-1 text-center mx-auto mb-4">
                    3
                  </div>
                  <div className="text-lg font-black text-gray-500 text-center py-1">
                    いいねをして、みんなのmakimonoを学習に役立てよう
                  </div>
                  <div className="mx-auto py-2">
                    <Image
                      src="/like_sns.svg"
                      width={300}
                      height={200}
                      alt="学習"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="gradient w-full mx-auto text-center pt-6 pb-12">
          <h2
            className="w-full my-2 text-4xl font-black leading-tight text-center text-white"
            id="get-start"
          >
            Getting Start!
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <h3 className="my-4 text-2xl font-extrabold">
            さあ、makimonoをはじめましょう!
          </h3>
          <Link href="/">
            <a>
              <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg">
                Go to app
              </button>
            </a>
          </Link>
        </section>
        <Footer />
      </div>

      <style jsx>
        {`
          @import url("https://rsms.me/inter/inter.css");
          html {
            font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
              Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
              "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
              "Noto Color Emoji";
          }

          .gradient {
            background-image: linear-gradient(
              -225deg,
              #cbbacc 0%,
              #2580b3 100%
            );
          }

          button,
          .gradient2 {
            background-color: #f39f86;
            background-image: linear-gradient(315deg, #f39f86 0%, #f9d976 74%);
          }

          .browser-mockup {
            border-top: 2em solid rgba(230, 230, 230, 0.7);
            position: relative;
            height: 60vh;
          }

          .browser-mockup:before {
            display: block;
            position: absolute;
            content: "";
            top: -1.25em;
            left: 1em;
            width: 0.5em;
            height: 0.5em;
            border-radius: 50%;
            background-color: #f44;
            box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
          }

          .browser-mockup > * {
            display: block;
          }
        `}
      </style>
    </>
  );
};

export default LandingPage;
