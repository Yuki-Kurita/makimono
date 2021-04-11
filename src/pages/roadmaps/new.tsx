import Layout from "@/components/Layout";
import React, { useState } from "react";

const CreateRoadmapPage: React.FC = () => {
  const [formValue, setFormValue] = useState("");
  const [title, setTitle] = useState("");
  return (
    <Layout>
      <main className="bg-gray-100 border-b py-8">
        <h1 className="text-2xl font-bold mb-4 text-center">
          ロードマップ作成
        </h1>
        <form className="container mx-auto">
          <div className="grid grid-cols-2 py-4 px-2 rounded-lg bg-white">
            <div className="col-span-2 mb-4">
              <div className="no ml-3">1</div>
            </div>
            <input
              className="appearance-none bg-transparent border-b border-teal-500 w-4/5 text-gray-700 mx-auto py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Title"
            />
            <input
              className="appearance-none bg-transparent border-b border-teal-500 w-4/5 text-gray-700 mx-auto py-1 px-2 leading-tight focus:outline-none"
              type="url"
              placeholder="ロードマップのURL"
            />
            <input
              className="col-span-2 appearance-none bg-transparent border-b border-teal-500 w-11/12 text-gray-700 mx-auto mt-5 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="説明"
            />
          </div>
          <div className="text-center mt-7">
            <button className="bg-white shadow w-4/5 px-4 py-2 rounded-lg">
              ロードマップを追加する +
            </button>
          </div>
          <div className="text-right mt-7">
            <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center mr-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              作成する
            </button>
          </div>
        </form>
      </main>
    </Layout>
  );
};

export default CreateRoadmapPage;
