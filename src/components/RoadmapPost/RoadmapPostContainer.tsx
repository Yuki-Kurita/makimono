import { Author } from "@/domain/author/Author";
import { RoadmapPost } from "./RoadmapPost";

interface RoadmapPostContainerProps {
  id: string;
  title: string;
  itemCount: number;
  category: string;
  tags: string[];
  likes: number;
  author: Author;
  updatedAt: string;
}

const RoadmapPostContainer: React.VFC<RoadmapPostContainerProps> = (props) => {
  return <RoadmapPost {...props} />;
};

export default RoadmapPostContainer;
