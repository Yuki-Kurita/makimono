import Layout from "@/components/Layout";
import RoadMapForm from "@/components/RoadMapForm";
import { useAppDispatch } from "@/store/hooks";
import React, { useState } from "react";

const CreateRoadmapPage: React.FC = () => {
  const [formCount, setFormCount] = useState(1);
  const dispatch = useAppDispatch();
  const handleAddForm = () => {
    setFormCount((formCount) => formCount + 1);
  };
  const handleOnSubmit = () => {
    // TODO: APIにpost
  };
  return (
    <Layout>
      <main className="bg-gray-100 border-b py-8">
        <h1 className="text-2xl font-bold mb-4 text-center">
          ロードマップ作成
        </h1>
        <form className="container mx-auto">
          {[...Array(formCount)]
            .map((_, i) => i + 1)
            .map((id) => (
              <RoadMapForm id={id} key={id} />
            ))}
        </form>
        <div className="text-center mt-7">
          <button
            type="button"
            className="bg-white shadow w-4/5 px-4 py-2 rounded-lg"
            onClick={handleAddForm}
          >
            ロードマップを追加する +
          </button>
        </div>
        <div className="text-right mt-7">
          <button
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center mr-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            onClick={handleOnSubmit}
          >
            作成する
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default CreateRoadmapPage;
