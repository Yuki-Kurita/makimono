import { Item } from "@/model/types";
import React, { useState } from "react";
import { useIntersectionObserver } from "./useIntersectionObserver";

interface TableContentsProps {
  items: Item[];
}

export const TableContents: React.VFC<TableContentsProps> = ({ items }) => {
  const [activeTitle, setActiveTitle] = useState<string>();
  useIntersectionObserver(setActiveTitle);
  const handleOnClickTableContent = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    id: number
  ) => {
    e.preventDefault();
    const headerElement = document.querySelector(`#title-${id}`);
    if (headerElement) {
      headerElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="bg-white p-8 rounded-md shadow w-64 sticky top-4 overflow-auto">
      <h3 className="font-bold text-xl mb-4 text-center">Roadmap</h3>
      <ol>
        {items.map((item, index) => (
          <li key={item.id} className="mb-2">
            <a
              href={`#title-${item.id}`}
              onClick={(e) => handleOnClickTableContent(e, item.id)}
              className={
                `title-${item.id}` === activeTitle
                  ? "text-gray-900"
                  : "text-gray-400"
              }
            >
              <div className="flex font-semibold">
                <div className="mr-2">{index + 1}</div>
                <div>{item.title}</div>
              </div>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};
