import { Link } from "@/model/types";
import { OGP } from "./OGP";

interface OGPListProps {
  links: Link[];
}

export const OGPList: React.VFC<OGPListProps> = ({ links }) => {
  return (
    <div>
      {links.map((link) => (
        <OGP
          key={link.id}
          url={link.url}
          ogpTitle={link.ogpTitle}
          ogpImageUrl={link.ogpImageUrl}
          ogpDescription={link.ogpDescription}
        />
      ))}
    </div>
  );
};
