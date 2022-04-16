import { Item } from "@/model/types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { OGPList } from "./OGPList/OGPList";

interface RoadmapItemsProps {
  items: Item[];
}

export const RoadmapItems: React.VFC<RoadmapItemsProps> = ({ items }) => {
  return (
    <div className="block">
      {/* Makimono design */}
      <div className="h-10 bg-highlight relative">
        <div className="absolute -left-5 top-2 w-5 h-6 bg-amber-900 rounded-l-lg"></div>
        <div className="absolute -left-1 w-1 h-10 bg-amber-400"></div>
        <div className="absolute -right-5 top-2 w-5 h-6 bg-amber-900 rounded-r-lg"></div>
        <div className="absolute -right-1 w-1 h-10 bg-amber-400"></div>
      </div>
      <div className="bg-teriary-light shadow-md p-8 border-8 border-highlight rounded-b-lg">
        {items.map((item) => (
          <div className="mb-8" key={item.id}>
            <div className="p-4 rounded-lg bg-white shadow-lg">
              <h2
                className="text-2xl font-semibold text-darkGray text-center mb-4"
                id={`title-${item.id}`}
              >
                {item.title}
              </h2>
              <div className="py-4 px-16 mb-6">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  className="markdown text-lg"
                >
                  {item.description || ""}
                </ReactMarkdown>
              </div>
              {/* OGPのリスト */}
              <div>
                <OGPList links={item.links} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
