import { FormData } from "@/components/RoadMapForm/RoadmapForm";
import { PostRoadmapMutationVariables } from "@/model/types";

export const postRoadmapArgBuilder = (
  formData: FormData
): PostRoadmapMutationVariables => {
  return {
    roadmap: {
      categoryId: Number(formData.categoryId),
      items: formData.roadmaps.map((it) => ({
        description: it.description,
        title: it.title,
        links:
          it.links.length >= 2
            ? // URLを入力しない場合空文字で送られてしまうので排除する
              it.links
                .slice(1)
                .map((link, order) => ({
                  ...link,
                  order: order + 1,
                }))
                .filter((l) => l.url !== "")
            : [{ ...it.links[0], order: 1 }].filter((l) => l.url !== ""),
      })),
      title: formData.title,
    },
  };
};
