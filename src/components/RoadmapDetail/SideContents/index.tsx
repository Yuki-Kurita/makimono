import { Exact, FetchRoadmapByIdQuery, Roadmap } from "@/model/types";
import { ApolloQueryResult } from "@apollo/client";
import { Buttons } from "./Buttons";
import { TableContents } from "./TableContents";

interface SideContentsProps {
  roadmap: Roadmap;
  refetchRoadmap: (
    variables?:
      | Partial<
          Exact<{
            id: string;
          }>
        >
      | undefined
  ) => Promise<ApolloQueryResult<FetchRoadmapByIdQuery>>;
}

export const SideContents: React.VFC<SideContentsProps> = ({
  roadmap,
  refetchRoadmap,
}) => {
  return (
    <div className="ml-16">
      <TableContents items={roadmap.items} />
      <Buttons
        roadmapId={roadmap.id}
        likes={roadmap.likes}
        refetchRoadmap={refetchRoadmap}
      />
    </div>
  );
};
