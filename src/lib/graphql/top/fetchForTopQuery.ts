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
    findTrendRoadmap: findRoadmap(limit: $limit, order: DESC, orderBy: LIKES) {
      ...RoadmapFields
    }
  }
`;
