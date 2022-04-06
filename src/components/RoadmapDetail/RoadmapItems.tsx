import { Item } from "@/model/types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface RoadmapItemsProps {
  items: Item[];
}

export const RoadmapItems: React.VFC<RoadmapItemsProps> = ({ items }) => {
  return (
    <>
      <div className="h-10 bg-highlight relative before:-mr-4 before:bg-amber-900 before:w-9 before:h-9"></div>
      <div className="bg-teriary-light shadow-md p-8 border-8 border-highlight">
        {items.map((item) => (
          <div className="mb-4" key={item.id}>
            <div className="p-4 rounded-lg bg-white shadow-lg">
              <h2 className="text-2xl font-semibold text-darkGray text-center">
                {item.title}
              </h2>
              <div className="py-4 px-8">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  className="markdown h-40"
                >
                  {item.description || ""}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
