import { gql } from "@apollo/client";
import { ROADMAP_FIELDS } from "../roadmap/roadmapFragment";

export const FETCH_ROADMAP_BY_ID = gql`
  ${ROADMAP_FIELDS}
  query fetchRoadmapById($id: String!) {
    findRoadmap(id: $id) {
      ...RoadmapFields
    }
  }
`;
