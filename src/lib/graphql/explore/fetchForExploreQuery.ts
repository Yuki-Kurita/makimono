import { gql } from "@apollo/client";
import { ROADMAP_FIELDS } from "../roadmap/roadmapFragment";

export const FETCH_FOR_EXPLORE = gql`
  ${ROADMAP_FIELDS}
  query fetchForExplore($limit: Int!, $query: String, $categoryId: Int) {
    findRoadmap(limit: $limit, query: $query, categoryId: $categoryId) {
      ...RoadmapFields
    }
  }
`;
