import { ErrorMessage } from "@/components/common/ErrorMessage";
import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
  const onClickTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsPreview((pre) => !pre);
  };
  return (
    <>
      {/* Tab */}
      <ul className="flex text-sm text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow w-80">
        <li className="w-full">
          <button
            onClick={onClickTab}
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
            onClick={onClickTab}
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
          <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown h-40">
            {markdown}
          </ReactMarkdown>
        )}
      </div>
      <div className="mb-4">
        <ErrorMessage message={error?.description?.message} />
      </div>
    </>
  );
};
