import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FormData, FormError } from "../RoadmapForm";
import { DotButton } from "./DotButton";
import ErrorMessages from "./ErrorMessages";
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
  const [markdown, setMarkdown] = useState("");
  const onChangeMarkdown = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

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
        <div className="p-4 flex justify-around">
          <div className="w-1/2 p-4 border-gray-200 border-r-2">
            <textarea
              {...register(`roadmaps.${index}.description` as const, {
                required: true,
                minLength: 1,
                maxLength: 5000,
              })}
              className="w-full appearance-none bg-transparent focus:outline-none h-28"
              onChange={onChangeMarkdown}
              placeholder="説明を書いてください"
            />
          </div>
          <div className="w-1/2 p-4">
            <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown">
              {markdown}
            </ReactMarkdown>
          </div>
        </div>
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
