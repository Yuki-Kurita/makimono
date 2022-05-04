import { ErrorMessage } from "@/components/common/ErrorMessage";
import { Markdown } from "@/components/common/Markdown";
import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { FormData, RoadmapFormError } from "../../RoadmapForm";

interface RoadmapMarkdownInput {
  index: number;
  register: UseFormRegister<FormData>;
  error: RoadmapFormError | undefined;
}

export const RoadmapMarkdownInput: React.VFC<RoadmapMarkdownInput> = ({
  index,
  register,
  error,
}) => {
  const [isPreview, setIsPreview] = useState(false);
  const [markdown, setMarkdown] = useState("");
  const onChangeMarkdown = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };
  const onClickTab = (
    e: React.MouseEvent<HTMLButtonElement>,
    isPreviewMode: boolean
  ) => {
    e.preventDefault();
    const canSwitch = isPreviewMode === true && isPreview === true;
    const canSwitch2 = isPreviewMode === false && isPreview === false;
    if (!canSwitch && !canSwitch2) setIsPreview((pre) => !pre);
  };
  return (
    <>
      {/* Tab */}
      <ul className="flex text-sm text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow w-80">
        <li className="w-full">
          <button
            onClick={(e) => onClickTab(e, false)}
            className={`inline-block p-2 w-full active focus:outline-none ${
              !isPreview
                ? "text-gray-900 bg-gray-100"
                : "bg-white hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            Write
          </button>
        </li>
        <li className="w-full">
          <button
            onClick={(e) => onClickTab(e, true)}
            className={`inline-block p-2 w-full active focus:outline-none ${
              isPreview
                ? "text-gray-900 bg-gray-100"
                : "bg-white hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            Preview
          </button>
        </li>
      </ul>
      <div className="px-4 py-8 border-gray-200">
        {!isPreview ? (
          <textarea
            {...register(`roadmaps.${index}.description` as const, {
              required: "説明は必須です",
              minLength: {
                value: 1,
                message: "説明は1文字以上40000文字以下で入力してください",
              },
              maxLength: {
                value: 40000,
                message: "説明は1文字以上40000文字以下で入力してください",
              },
            })}
            className="w-full appearance-none bg-transparent focus:outline-none h-40 shadow p-4"
            onChange={onChangeMarkdown}
            placeholder="説明を書いてください"
          />
        ) : (
          <div className="">
            <Markdown markdown={markdown}></Markdown>
          </div>
        )}
      </div>
      <div className="mb-4">
        <ErrorMessage message={error?.description?.message} />
      </div>
    </>
  );
};
