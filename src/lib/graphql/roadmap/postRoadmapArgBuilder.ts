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
            ? it.links.slice(1).map((link, order) => ({
                ...link,
                order: order + 1,
              }))
            : [{ ...it.links[0], order: 1 }],
      })),
      title: formData.title,
    },
  };
};
