import React from "react";
import { UseFormRegister } from "react-hook-form";
import { FormData, FormError } from "../RoadmapForm";
import { DotButton } from "./DotButton";
import ErrorMessages from "./ErrorMessages";
import { RoadmapMarkdownInput } from "./RoadmapMarkdownInput";
import { RoadmapInputURL } from "./RoadmapURLInput";

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
    <div className="mt-4 py-4 px-8 rounded-lg bg-white shadow-lg">
      <div className="flex flex-col">
        {/* タイトル・インデックスフォーム */}
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
              minLength: 1,
              maxLength: 100,
            })}
            className="appearance-none bg-transparent px-2 focus:outline-none ml-4 font-bold text-xl"
            type="text"
            placeholder="Title of step"
          />
        </div>
        {/* マークダウンフォーム */}
        <RoadmapMarkdownInput index={index} register={register} />
        {/* URLフォーム */}
        <RoadmapInputURL index={index} register={register} />
      </div>
      <div className="h-7">
        {/* Formが2つ以上ある場合のみ削除できるボタンを表示 */}
        {canRemoveForm && <DotButton handleDeleteForm={() => remove(index)} />}
        <ErrorMessages errors={errors} index={index} />
      </div>
    </div>
  );
};
