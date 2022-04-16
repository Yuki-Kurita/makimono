import { Roadmap } from "@/model/types";
import { TableContents } from "../TableContents";

interface SideContentsProps {
  roadmap: Roadmap;
}

export const SideContents: React.VFC<SideContentsProps> = ({ roadmap }) => {
  return (
    <div className="ml-16">
      <TableContents items={roadmap.items} />
    </div>
  );
};
