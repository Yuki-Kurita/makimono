import { gql } from "@apollo/client";
import { ROADMAP_DETAIL_FIELDS } from "../roadmap/roadmapFragment";

export const FETCH_ROADMAP_BY_ID = gql`
  ${ROADMAP_DETAIL_FIELDS}
  query fetchRoadmapById($id: String!) {
    findRoadmap(id: $id) {
      ...RoadmapDetailFields
    }
    fetchIsLikedByMe(roadmapId: $id) {
      id
      roadmapId
      isMine
    }
  }
`;
