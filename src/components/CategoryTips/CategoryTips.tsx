import { Category } from "@/domain/category/Category";
import React from "react";
import CategoryTip from "./CategoryTip";

interface CategoryTipsProps {
  categories: Category[];
}

const colors = ["bg-red-400", "bg-yellow-400", "bg-green-600", "bg-blue-400"];

const CategoryTips: React.VFC<CategoryTipsProps> = ({ categories }) => {
  return (
    <div className="flex">
      {categories.map((category, i) => (
        <CategoryTip color={colors[i]} key={category.id}>
          {category.name}
        </CategoryTip>
      ))}
    </div>
  );
};

export default CategoryTips;
