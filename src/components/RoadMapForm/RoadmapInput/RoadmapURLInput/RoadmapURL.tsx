import { OGP } from "@/components/common/OGP";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "../../RoadmapForm";

interface RoadmapURLProps {
  roadmapIndex: number;
  urlIndex: number;
  url: string;
  register: UseFormRegister<FormData>;
  onClickRemoveURL: (e: React.MouseEvent<any>, urlIndex: number) => void;
}

export const RoadmapURL: React.VFC<RoadmapURLProps> = ({
  roadmapIndex,
  urlIndex,
  url,
  register,
  onClickRemoveURL,
}) => {
  return (
    <div>
      <OGP
        url={url}
        urlIndex={urlIndex}
        onClickRemoveURL={onClickRemoveURL}
        register={register}
        roadmapIndex={roadmapIndex}
      />
      {/* FIXME: index 0からだと空文字で登録されてしまう */}
      <input
        {...register(
          `roadmaps.${roadmapIndex}.links.${urlIndex + 1}.url` as const
        )}
        value={url}
        type="hidden"
      />
    </div>
  );
};
