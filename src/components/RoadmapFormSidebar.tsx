import { Category } from "@/model/types";
import { ErrorMessage } from "./common/ErrorMessage";

interface RoadmapFormSidebarProps {
  register: any;
  categories: Category[] | undefined;
  categoryErrorMessage: string | undefined;
}

export const RoadmapFormSidebar: React.VFC<RoadmapFormSidebarProps> = ({
  register,
  categories,
  categoryErrorMessage,
}) => {
  return (
    <div className="mx-auto w-full md:w-1/4 mb-8 px-8 pt-10">
      <div className="max-w-md mx-auto">
        <h5 className="text-lg font-bold text-darkGray mb-3">Category</h5>
        <select
          className="block appearance-none w-full border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
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
        <ErrorMessage message={categoryErrorMessage} />
      </div>
    </div>
  );
};
