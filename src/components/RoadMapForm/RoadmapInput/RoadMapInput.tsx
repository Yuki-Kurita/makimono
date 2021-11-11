import React from "react";
import { UseFormRegister } from "react-hook-form";
import { FormData, FormError } from "../RoadmapForm";
import { DotButton } from "./DotButton";
import ErrorMessages from "./ErrorMessages";

interface RoadmapInputProps {
  id: string;
  index: number;
  register: UseFormRegister<FormData>;
  canRemoveForm: boolean;
  remove: (index?: number | number[] | undefined) => void;
  errors: FormError;
}

const RoadmapInput: React.FC<RoadmapInputProps> = ({
  id,
  index,
  register,
  canRemoveForm,
  remove,
  errors,
}) => {
  const order = index + 1;
  return (
    <div className="mt-4 py-4 px-2 rounded-lg bg-white">
      <div className="grid grid-cols-2 ">
        <div className="col-span-2 mb-4">
          <div className="no ml-3">{order}</div>
        </div>
        <input
          {...register(`roadmaps.${index}.order` as const)}
          type="hidden"
          value={order}
        />
        <input
          {...register(`roadmaps.${index}.title` as const, {
            required: true,
            min: 1,
            max: 100,
          })}
          className="appearance-none bg-transparent border-b border-teal-500 w-4/5 text-gray-700 mx-auto py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Title"
        />
        <input
          {...register(`roadmaps.${index}.url` as const, {
            required: true,
            min: 1,
            max: 500,
          })}
          className="appearance-none bg-transparent border-b border-teal-500 w-4/5 text-gray-700 mx-auto py-1 px-2 leading-tight focus:outline-none"
          type="url"
          placeholder="ロードマップのURL"
        />
        <textarea
          {...register(`roadmaps.${index}.description` as const, {
            required: true,
            min: 1,
            max: 5000,
          })}
          className="col-span-2 appearance-none bg-transparent border-b border-teal-500 w-11/12 text-gray-700 mx-auto mt-5 py-1 px-2 leading-tight focus:outline-none"
          placeholder="説明"
        />
      </div>
      <div className="h-7">
        {/* Formが2つ以上ある場合のみ削除できるボタンを表示 */}
        {canRemoveForm && <DotButton handleDeleteForm={() => remove(index)} />}
        <ErrorMessages errors={errors} index={index} />
      </div>
    </div>
  );
};

export default RoadmapInput;
