import { Category } from "@/model/types";

interface RoadmapFormSidebarProps {
  register: any;
  categories: Category[] | undefined;
}

export const RoadmapFormSidebar: React.VFC<RoadmapFormSidebarProps> = ({
  register,
  categories,
}) => {
  return (
    <div className="mx-auto w-1/4 px-8 pt-10">
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
    </div>
  );
};
