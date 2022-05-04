import { ErrorMessage } from "@/components/common/ErrorMessage";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { FormData, RoadmapFormError } from "../RoadmapForm";
import { DotButton } from "./DotButton";
import { RoadmapMarkdownInput } from "./RoadmapMarkdownInput";
import { RoadmapInputURL } from "./RoadmapURLInput";

interface RoadmapInputProps {
  id: string;
  index: number;
  register: UseFormRegister<FormData>;
  canRemoveForm: boolean;
  remove: (index?: number | number[] | undefined) => void;
  error: RoadmapFormError | undefined;
}

export const RoadmapInput: React.FC<RoadmapInputProps> = ({
  id,
  index,
  register,
  canRemoveForm,
  remove,
  error,
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
              required: "タイトルは必須です",
              minLength: {
                value: 1,
                message: "タイトルは1文字以上100文字以下で入力してください",
              },
              maxLength: {
                value: 100,
                message: "タイトルは1文字以上100文字以下で入力してください",
              },
            })}
            className="appearance-none bg-transparent px-2 focus:outline-none ml-4 font-bold text-xl"
            type="text"
            placeholder="Title of step"
          />
        </div>
        <div className="mb-4">
          <ErrorMessage message={error?.title?.message} />
        </div>
        {/* マークダウンフォーム */}
        <RoadmapMarkdownInput index={index} register={register} error={error} />
        {/* URLフォーム */}
        <RoadmapInputURL index={index} register={register} />
      </div>
      <div className="h-7">
        {/* Formが2つ以上ある場合のみ削除できるボタンを表示 */}
        {canRemoveForm && <DotButton handleDeleteForm={() => remove(index)} />}
      </div>
    </div>
  );
};
