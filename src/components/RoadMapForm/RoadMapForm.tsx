import { useAppDispatch } from "@/store/hooks";
import { setRoadmap } from "@/store/roadmap/roadmapSlice";
import React, { useState } from "react";

interface RoadMapFormProps {
  id: number;
}

interface FormProps {
  id: number;
  title: string;
  url: string;
  explain: string;
}

const RoadMapForm: React.FC<RoadMapFormProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const [formValue, setFormValue] = useState<FormProps>({
    id,
    title: "",
    url: "",
    explain: "",
  });
  return (
    <div className="grid grid-cols-2 mt-4 py-4 px-2 rounded-lg bg-white">
      <div className="col-span-2 mb-4">
        <div className="no ml-3">{id}</div>
      </div>
      <input
        className="appearance-none bg-transparent border-b border-teal-500 w-4/5 text-gray-700 mx-auto py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Title"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormValue((formValue) => {
            return { ...formValue, title: e.target.value };
          })
        }
        onBlur={() => dispatch(setRoadmap(formValue))}
      />
      <input
        className="appearance-none bg-transparent border-b border-teal-500 w-4/5 text-gray-700 mx-auto py-1 px-2 leading-tight focus:outline-none"
        type="url"
        placeholder="ロードマップのURL"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormValue((formValue) => {
            return { ...formValue, url: e.target.value };
          })
        }
        onBlur={() => dispatch(setRoadmap(formValue))}
      />
      <input
        className="col-span-2 appearance-none bg-transparent border-b border-teal-500 w-11/12 text-gray-700 mx-auto mt-5 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="説明"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormValue((formValue) => {
            return { ...formValue, explain: e.target.value };
          })
        }
        onBlur={() => dispatch(setRoadmap(formValue))}
      />
    </div>
  );
};

export default RoadMapForm;
