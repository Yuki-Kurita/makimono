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
        links: it.url.map((u, order) => ({
          url: u,
          order,
        })),
      })),
      title: "roadmap title",
    },
  };
};
