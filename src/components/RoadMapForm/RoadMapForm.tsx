import { Category } from "@/model/types";
import React from "react";
import {
  FieldError,
  SubmitHandler,
  useFieldArray,
  useForm
} from "react-hook-form";
import { RoadmapInput } from "./RoadmapInput/RoadMapInput";

interface RoadmapFormProps {
  categories: Category[] | undefined;
  onSubmit: SubmitHandler<FormData>;
}

export interface FormData {
  roadmaps: {
    order: number;
    title: string;
    url: string;
    description: string;
  }[];
  categoryId: number;
}

export interface FormError {
  roadmaps?: {
    order?: FieldError | undefined;
    title?: FieldError | undefined;
    url?: FieldError | undefined;
    description?: FieldError | undefined;
  }[];
  categoryId?: FieldError | undefined;
}

export const RoadmapForm: React.VFC<RoadmapFormProps> = ({
  categories,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    defaultValues: {
      roadmaps: [{ order: 1, title: "", url: "", description: "" }],
    },
  });
  // https://react-hook-form.com/api/usefieldarray
  const { fields, append, remove } = useFieldArray({
    name: "roadmaps",
    control,
  });
  const canRemoveForm = fields.length >= 2;
  return (
    <form className="container mx-auto ">
      <select
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        {...register("categoryId")}
      >
        {categories?.map((it) => {
          return (
            <option key={it.id} value={it.id}>
              {it.name}
            </option>
          );
        })}
      </select>
      {fields.map((field, index) => (
        <RoadmapInput
          id={field.id}
          index={index}
          key={field.id}
          register={register}
          canRemoveForm={canRemoveForm}
          remove={remove}
          errors={errors}
        />
      ))}
      <div className="text-center mt-7">
        <button
          type="button"
          className="bg-white shadow w-4/5 px-4 py-2 rounded-lg focus:outline-none"
          onClick={() =>
            append({
              order: Number(fields[fields.length - 1].order) + 1,
              title: "",
              url: "",
              description: "",
            })
          }
        >
          ロードマップを追加する +
        </button>
      </div>
      <div className="text-right mt-7">
        <button
          className="ml-8 whitespace-nowrap inline-flex items-center justify-center mr-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          onClick={handleSubmit(onSubmit)}
        >
          作成する
        </button>
      </div>
    </form>
  );
};
