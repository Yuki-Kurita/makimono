import { NextPage } from "next";
import Link from "next/link";

const NotFoundPage: NextPage = () => {
  return (
    <div
      className="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-gradient-to-r
    from-highlight
    to-emerald-400
  "
    >
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-accent text-3xl mb-4">
            システムエラーが発生しました
          </h1>

          <p className="mb-8 text-center text-gray-500 md:text-lg">
            申し訳ございませんが、時間をおいて再操作してください。
          </p>

          <Link href="/">
            <a
              href="#"
              className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
            >
              トップページへ戻る
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
