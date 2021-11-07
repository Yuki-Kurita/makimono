import React from "react";
import { UseFormRegister } from "react-hook-form";
import { DotButton } from "./DotButton";

interface RoadMapFormProps {
  id: number;
  index: number;
  register: UseFormRegister<FormProps>;
  canRemoveForm: boolean;
  remove: (index?: number | number[] | undefined) => void;
}

export interface FormProps {
  roadmaps: {
    id: number;
    title: string;
    url: string;
    explain: string;
  }[];
}

const RoadMapForm: React.FC<RoadMapFormProps> = ({
  id,
  index,
  register,
  canRemoveForm,
  remove,
}) => {
  return (
    <div className="mt-4 py-4 px-2 rounded-lg bg-white">
      <div className="grid grid-cols-2 ">
        <div className="col-span-2 mb-4">
          <div className="no ml-3">{id}</div>
        </div>
        <input
          {...register(`roadmaps.${index}.id` as const)}
          type="hidden"
          value={id}
        />
        <input
          {...register(`roadmaps.${index}.title` as const)}
          className="appearance-none bg-transparent border-b border-teal-500 w-4/5 text-gray-700 mx-auto py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Title"
        />
        <input
          {...register(`roadmaps.${index}.url` as const)}
          className="appearance-none bg-transparent border-b border-teal-500 w-4/5 text-gray-700 mx-auto py-1 px-2 leading-tight focus:outline-none"
          type="url"
          placeholder="ロードマップのURL"
        />
        <textarea
          {...register(`roadmaps.${index}.explain` as const)}
          className="col-span-2 appearance-none bg-transparent border-b border-teal-500 w-11/12 text-gray-700 mx-auto mt-5 py-1 px-2 leading-tight focus:outline-none"
          placeholder="説明"
        />
      </div>
      <div className="h-7">
        {/* Formが2つ以上ある場合のみ削除できるボタンを表示 */}
        {canRemoveForm && <DotButton handleDeleteForm={() => remove(index)} />}
      </div>
    </div>
  );
};

export default RoadMapForm;
