import { gql } from "@apollo/client";
import { ROADMAP_FIELDS } from "../roadmap/roadmapFragment";

export const FETCH_FOR_EXPLORE = gql`
  ${ROADMAP_FIELDS}
  query fetchForExplore(
    $limit: Int!
    $offset: Int!
    $query: String
    $categoryId: Int
    $order: RoadmapOrder
    $orderBy: RoadmapOrderBy
  ) {
    fetchRoadmap(
      limit: $limit
      offset: $offset
      query: $query
      categoryId: $categoryId
      order: $order
      orderBy: $orderBy
    ) {
      ...RoadmapFields
    }
  }
`;
