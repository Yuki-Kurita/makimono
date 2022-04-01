import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import validator from "validator";
import { FormData } from "../../RoadmapForm";
import { RoadmapURL } from "./RoadmapURL";

interface RoadmapURLInputProps {
  index: number;
  register: UseFormRegister<FormData>;
}

interface URLForm {
  roadmapIndex: number;
  urlIndex: number;
  url: string;
}

export const RoadmapInputURL: React.VFC<RoadmapURLInputProps> = ({
  index,
  register,
}) => {
  const [url, setURL] = useState("");
  const [urlError, setURLError] = useState({ message: "", isShown: false });
  const [formURLs, setFormURLs] = useState<URLForm[]>([]);
  const onChangeURL = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validator.isURL(e.target.value)) {
      setURLError({ message: "", isShown: false });
    } else {
      setURLError({ message: "不正なURLです", isShown: false });
    }
    setURL(e.target.value);
  };
  const onClickAddURL = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!url) {
      setURLError({ message: "URLを入力してください", isShown: true });
    } else if (urlError.message) {
      setURLError((error) => ({ message: error.message, isShown: true }));
    } else {
      setFormURLs([
        ...formURLs,
        { urlIndex: formURLs.length, roadmapIndex: index, url },
      ]);
    }
  };
  const onClickRemoveURL = (e: React.MouseEvent<any>, urlIndex: number) => {
    e.preventDefault();
    setFormURLs((before) => before.filter((it) => it.urlIndex !== urlIndex));
  };

  return (
    <>
      <div className="flex justify-around">
        <input
          className="appearance-none bg-transparent w-3/4 py-1 px-2 leading-tight focus:outline-none shadow-inner shadow-gray-300 rounded-md"
          type="url"
          placeholder="https://makimono.com"
          onChange={onChangeURL}
        />
        <button
          onClick={(e) => onClickAddURL(e)}
          className="whitespace-nowrap inline-flex items-center justify-center p-2 rounded-md shadow-sm text-sm text-white bg-accent hover:bg-orange-300"
        >
          URLを追加
        </button>
      </div>
      <div className="text-sm text-rose-400 font-semibold ml-4 h-6">
        {urlError.isShown && urlError.message}
      </div>
      <div>
        {formURLs.map((formURL) => (
          <RoadmapURL
            roadmapIndex={formURL.roadmapIndex}
            urlIndex={formURL.urlIndex}
            url={formURL.url}
            register={register}
            onClickRemoveURL={onClickRemoveURL}
            key={formURL.urlIndex}
          />
        ))}
      </div>
    </>
  );
};
