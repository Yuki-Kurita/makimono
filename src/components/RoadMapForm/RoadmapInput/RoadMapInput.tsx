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

export const RoadmapInput: React.FC<RoadmapInputProps> = ({
  id,
  index,
  register,
  canRemoveForm,
  remove,
  errors,
}) => {
  const order = index + 1;
  return (
    <div className="mt-4 py-4 px-2 rounded-lg bg-white shadow-lg">
      <div className="flex flex-col">
        <div className="mb-4 flex border-b-2 p-2 mx-4 font-bold text-xl">
          <div className="no ml-3">{order}.</div>
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
            className="appearance-none bg-transparent px-2 focus:outline-none ml-4 font-bold text-xl"
            type="text"
            placeholder="Title of step"
          />
        </div>
        <div className="p-4 justify-center flex">
          <textarea
            {...register(`roadmaps.${index}.description` as const, {
              required: true,
              min: 1,
              max: 5000,
            })}
            className="w-full"
            placeholder="説明"
          />
        </div>
        <div>
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
        </div>
      </div>
      <div className="h-7">
        {/* Formが2つ以上ある場合のみ削除できるボタンを表示 */}
        {canRemoveForm && <DotButton handleDeleteForm={() => remove(index)} />}
        <ErrorMessages errors={errors} index={index} />
      </div>
    </div>
  );
};
