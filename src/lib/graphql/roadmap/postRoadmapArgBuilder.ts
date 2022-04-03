import { FormData } from "@/components/RoadMapForm/RoadmapForm";
import { PostRoadmapMutationVariables } from "@/model/types";

export const postRoadmapArgBuilder = (
  formData: FormData
): PostRoadmapMutationVariables => {
  return {
    roadmap: {
      categoryId: Number(formData.categoryId),
      items: formData.roadmaps.map((it) => ({
        id: it.order,
        description: it.description,
        title: it.title,
        links:
          it.url.length >= 2
            ? it.url.slice(1).map((u, order) => ({
                url: u,
                order: order + 1,
              }))
            : [{ url: it.url[0], order: 1 }],
      })),
      title: formData.title,
    },
  };
};
