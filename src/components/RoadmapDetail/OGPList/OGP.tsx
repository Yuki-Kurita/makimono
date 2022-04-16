import { Maybe } from "@/model/types";
import Image from "next/image";

interface OGPProps {
  url: string;
  ogpTitle?: Maybe<string>;
  ogpImageUrl?: Maybe<string>;
  ogpDescription?: Maybe<string>;
}

export const OGP: React.VFC<OGPProps> = ({
  url,
  ogpTitle,
  ogpImageUrl,
  ogpDescription,
}) => {
  const shortWords = (words: number, desc?: string) => {
    if (!desc) return "";
    if (desc.length >= words) {
      return `${desc.slice(0, words)}...`;
    }
    return desc;
  };

  const handleOnClick = () => {
    if (typeof window !== undefined) {
      window.open(url, "_blank");
    }
  };
  return (
    <div className="flex rounded-xl shadow mb-2 hover:bg-gray-50 relative">
      <div className="w-40 text-center my-auto" onClick={handleOnClick}>
        <Image
          src={ogpImageUrl || "/noimage.svg"}
          width={80}
          height={60}
          objectFit="cover"
          alt="ogp image"
        />
      </div>
      <div className="py-4 px-4" onClick={handleOnClick}>
        <div className="text-gray-400 text-xs">{url}</div>
        {ogpTitle && (
          <div className="text-gray-600 text-sm">
            {shortWords(24, ogpTitle)}
          </div>
        )}
        {ogpDescription && (
          <div className="text-gray-400 text-sm">
            {shortWords(50, ogpDescription)}
          </div>
        )}
      </div>
    </div>
  );
};
