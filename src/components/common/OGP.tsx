import { OGPResponse } from "@/pages/api/ogp";
import Image from "next/image";
import { useEffect, useState } from "react";

interface OGPProps {
  url: string;
}

export const OGP: React.VFC<OGPProps> = ({ url }) => {
  const [ogp, setOgp] = useState<OGPResponse>();
  useEffect(() => {
    // OGP取得
    fetch("/api/ogp", { method: "POST", body: JSON.stringify({ url }) }).then(
      (res) => res.json().then((it) => setOgp(it))
    );
  }, [url]);
  const shortWords = (words: number, desc?: string) => {
    if (!desc) return "";
    if (desc.length >= words) {
      return `${desc.slice(0, words)}...`;
    }
    return desc;
  };
  return (
    <>
      {ogp && (
        <div className="flex rounded-xl shadow mb-2">
          <div className="w-20 h-20">
            <Image
              src={ogp.image || "/noimage.svg"}
              objectFit="cover"
              width={300}
              height={500}
              alt="no image"
            />
          </div>
          <div>
            <div className="text-gray-400 text-xs">{ogp.url || url}</div>
            <div className="text-gray-600 text-sm">
              {shortWords(24, ogp.title)}
            </div>
            <div className="text-gray-400 text-sm">
              {shortWords(50, ogp.description)}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
