import React from "react";

interface RoadMapFormProps {}

const RoadMapForm: React.FC<RoadMapFormProps> = () => {
  return (
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
  );
};

export default RoadMapForm;
