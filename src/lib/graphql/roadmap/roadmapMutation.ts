import { gql } from "@apollo/client";

export const UPDATE_ROADMAP = gql`
  mutation updateRoadmap($roadmap: RoadmapInput!, $id: String!) {
    updateRoadmap(roadmap: $roadmap, id: $id)
  }
`;
