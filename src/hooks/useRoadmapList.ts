import {
  FIND_LATEST_ROADMAPS,
  FIND_ROADMAPS_BY_CATEGORY,
} from "@/lib/graphql/roadmapQuery";
import {
  FindLatestRoadmapQuery,
  FindRoadmapByCategoryQuery,
  Roadmap,
} from "@/model/types";
import { ApolloError, useQuery } from "@apollo/client";

interface RoadmapList {
  latestRoadmaps?: Roadmap[] | undefined;
  programmingRoadmaps?: Roadmap[] | undefined;
  artRoadmaps?: Roadmap[] | undefined;
  loading: boolean;
  errors?: (ApolloError | undefined)[];
}

export const useRoadmapList = (): RoadmapList => {
  const latestRoadmapsQuery = useQuery<FindLatestRoadmapQuery>(
    FIND_LATEST_ROADMAPS,
    {
      variables: {
        limit: 6,
      },
    }
  );
  const programmingRoadmapsQuery = useQuery<FindRoadmapByCategoryQuery>(
    FIND_ROADMAPS_BY_CATEGORY,
    {
      variables: {
        categoryId: 1,
        limit: 6,
      },
    }
  );
  const artRoadmapsQuery = useQuery<FindRoadmapByCategoryQuery>(
    FIND_ROADMAPS_BY_CATEGORY,
    {
      variables: {
        categoryId: 5,
        limit: 6,
      },
    }
  );
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
  const latestRoadmaps = latestRoadmapsQuery.data?.findRoadmap as
    | Roadmap[]
    | undefined;
  const programmingRoadmaps = programmingRoadmapsQuery.data?.findRoadmap as
    | Roadmap[]
    | undefined;
  const artRoadmaps = artRoadmapsQuery.data?.findRoadmap as
    | Roadmap[]
    | undefined;
  return { latestRoadmaps, programmingRoadmaps, artRoadmaps, loading: false };
};
