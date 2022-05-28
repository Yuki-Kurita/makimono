import { Category } from "@/model/types";
import React from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import {
  FieldError,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { ErrorMessage } from "../common/ErrorMessage";
import { RoadmapFormSidebar } from "../RoadmapFormSidebar";
import { RoadmapInput } from "./RoadmapInput/RoadMapInput";

interface RoadmapFormProps {
  categories: Category[] | undefined;
  onSubmit: SubmitHandler<FormData>;
}

export interface FormData {
  title: string;
  roadmaps: {
    order: number;
    title: string;
    links: {
      url: string;
      ogpTitle?: string;
      ogpImageUrl?: string;
      ogpDescription?: string;
    }[];
    description: string;
  }[];
  categoryId: number;
}

export interface RoadmapFormError {
  order?: FieldError | undefined;
  title?: FieldError | undefined;
  links: {
    url?: FieldError | undefined;
    ogpTitle?: FieldError | undefined;
    ogpImageUrl?: FieldError | undefined;
    ogpDescription?: FieldError | undefined;
  }[];
  description?: FieldError | undefined;
}
export interface FormError {
  title: FieldError | undefined;
  roadmaps?: RoadmapFormError[];
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
      roadmaps: [
        { order: 1, title: "", links: [{ url: "" }], description: "" },
      ],
    },
  });
  // https://react-hook-form.com/api/usefieldarray
  const { fields, append, remove, swap } = useFieldArray({
    name: "roadmaps",
    control,
  });
  const canRemoveForm = fields.length >= 2;
  const handleOnDragEnd = (result: DropResult) => {
    // swap
    // from: ドラッグされるコンポーネントの元のインデックス
    // to: ドラッグされるコンポーネントの遷移先のインデックス
    if (result.destination) swap(result.source.index, result.destination.index);
  };
  return (
    <div className="flex container mx-auto flex-col-reverse md:flex-row">
      <div className="px-4 py-2 w-full md:w-3/4 bg-teriary-light rounded-lg shadow-md">
        <form className="px-4 py-4">
          <input
            className="appearance-none bg-transparent w-4/5 mx-auto py-2 px-4 focus:outline-none mb-6 font-bold text-3xl"
            type="text"
            placeholder="Roadmap title"
            {...register("title", {
              required: "ロードマップのタイトルを記述してください",
            })}
          />
          <ErrorMessage message={errors.title?.message} />
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {fields.map((field, index) => (
                    <Draggable
                      key={field.id}
                      draggableId={field.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          key={field.id}
                        >
                          <RoadmapInput
                            id={field.id}
                            index={index}
                            register={register}
                            canRemoveForm={canRemoveForm}
                            remove={remove}
                            error={errors.roadmaps?.[index] as RoadmapFormError}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <div className="text-center mt-7">
            <button
              type="button"
              className="bg-white shadow w-4/5 px-4 py-2 rounded-lg focus:outline-none"
              onClick={() =>
                append({
                  order: Number(fields[fields.length - 1].order) + 1,
                  title: "",
                  links: [{ url: "" }],
                  description: "",
                })
              }
            >
              ロードマップを追加する +
            </button>
          </div>
          <div className="text-right mt-7">
            <button
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center mr-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-highlight hover:bg-teal-500"
              onClick={handleSubmit(onSubmit)}
            >
              作成する
            </button>
          </div>
        </form>
      </div>
      <RoadmapFormSidebar
        register={register}
        categories={categories}
        categoryErrorMessage={errors.categoryId?.message}
      />
    </div>
  );
};
