import { Roadmap } from "@/domain/roadmap/Roadmap";
import {
  FIND_LATEST_ROADMAPS,
  FIND_ROADMAPS_BY_CATEGORY,
} from "@/lib/graphql/roadmapQuery";
import { ApolloError, useQuery } from "@apollo/client";

interface RoadmapList {
  latestRoadmaps?: Roadmap[];
  programmingRoadmaps?: Roadmap[];
  artRoadmaps?: Roadmap[];
  loading: boolean;
  errors?: (ApolloError | undefined)[];
}

export const useRoadmapList = (): RoadmapList => {
  const latestRoadmapsQuery = useQuery(FIND_LATEST_ROADMAPS, {
    variables: {
      limit: 6,
    },
  });
  const programmingRoadmapsQuery = useQuery(FIND_ROADMAPS_BY_CATEGORY, {
    variables: {
      categoryId: 1,
      limit: 6,
    },
  });
  const artRoadmapsQuery = useQuery(FIND_ROADMAPS_BY_CATEGORY, {
    variables: {
      categoryId: 5,
      limit: 6,
    },
  });
  if (
    latestRoadmapsQuery.loading ||
    programmingRoadmapsQuery.loading ||
    artRoadmapsQuery.loading
  ) {
    return { loading: true };
  }
  if (
    latestRoadmapsQuery.error ||
    programmingRoadmapsQuery.error ||
    artRoadmapsQuery.error
  ) {
    return {
      loading: false,
      errors: [
        latestRoadmapsQuery.error,
        programmingRoadmapsQuery.error,
        artRoadmapsQuery.error,
      ],
    };
  }
  const latestRoadmaps: Roadmap[] = latestRoadmapsQuery.data?.findRoadmap;
  const programmingRoadmaps: Roadmap[] =
    programmingRoadmapsQuery.data?.findRoadmap;
  const artRoadmaps: Roadmap[] = artRoadmapsQuery.data?.findRoadmap;
  return { latestRoadmaps, programmingRoadmaps, artRoadmaps, loading: false };
};
