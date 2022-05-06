import { gql } from "@apollo/client";
import { ROADMAP_FIELDS } from "../roadmap/roadmapFragment";

export const FETCH_FOR_EXPLORE = gql`
  ${ROADMAP_FIELDS}
  query fetchForExplore($limit: Int!) {
    findLatestRoadmap: findRoadmap(
      limit: $limit
      order: DESC
      orderBy: UPDATEDAT
    ) {
      ...RoadmapFields
    }
  }
`;
