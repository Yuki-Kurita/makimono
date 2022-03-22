import { gql } from "@apollo/client";
import { ROADMAP_FIELDS } from "../roadmap/roadmapFragment";

export const FETCH_FOR_TOP = gql`
  ${ROADMAP_FIELDS}
  query fetchForTop($limit: Int!) {
    findLatestRoadmap: findRoadmap(
      limit: $limit
      order: DESC
      orderBy: UPDATEDAT
    ) {
      ...RoadmapFields
    }
    findProgrammingRoadmap: findRoadmap(limit: $limit, categoryId: 1) {
      ...RoadmapFields
    }
    findArtRoadmap: findRoadmap(limit: $limit, categoryId: 6) {
      ...RoadmapFields
    }
  }
`;
