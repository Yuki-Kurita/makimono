import { OGPResponse } from "@/pages/api/ogp";
import Image from "next/image";
import { useEffect, useState } from "react";

interface OGPProps {
  url: string;
  urlIndex: number;
  onClickRemoveURL: (e: React.MouseEvent<any>, urlIndex: number) => void;
}

export const OGP: React.VFC<OGPProps> = ({
  url,
  urlIndex,
  onClickRemoveURL,
}) => {
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

  const handleOnClick = () => {
    if (typeof window !== undefined) {
      window.open(ogp?.url || url, "_blank");
    }
  };
  return (
    <>
      {ogp && (
        <div className="flex rounded-xl shadow mb-2 hover:bg-gray-50 relative">
          <div className="w-40 text-center my-auto" onClick={handleOnClick}>
            <Image
              src={ogp.image || "/noimage.svg"}
              width={100}
              height={80}
              objectFit="cover"
              alt="no image"
            />
          </div>
          <div className="py-4 px-4" onClick={handleOnClick}>
            <div className="text-gray-400 text-xs">{ogp.url || url}</div>
            <div className="text-gray-600 text-sm">
              {shortWords(24, ogp.title)}
            </div>
            <div className="text-gray-400 text-sm">
              {shortWords(50, ogp.description)}
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute -right-2 -top-2 text-pink-400 hover:text-pink-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            onClick={(e) => onClickRemoveURL(e, urlIndex)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      )}
    </>
  );
};
