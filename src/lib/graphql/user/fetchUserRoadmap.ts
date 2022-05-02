import { gql } from "@apollo/client";
import { ROADMAP_DETAIL_FIELDS } from "../roadmap/roadmapFragment";

export const FETCH_USER_ROADMAP = gql`
  ${ROADMAP_DETAIL_FIELDS}
  query findMyRoadmap {
    findMyRoadmap {
      ...RoadmapDetailFields
    }
  }
`;
