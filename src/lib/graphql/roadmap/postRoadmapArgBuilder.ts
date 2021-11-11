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
        links: [
          {
            id: 1,
            url: it.url,
          },
        ],
      })),
      title: "roadmap title",
    },
  };
};
