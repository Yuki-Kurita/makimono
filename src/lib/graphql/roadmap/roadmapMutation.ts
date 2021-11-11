import { gql } from "@apollo/client";

export const UPDATE_ROADMAP = gql`
  mutation updateRoadmap($roadmap: RoadmapInput!, $id: String!) {
    updateRoadmap(roadmap: $roadmap, id: $id)
  }
`;

export const POST_ROADMAP = gql`
  mutation postRoadmap($roadmap: RoadmapInput!) {
    postRoadmap(roadmap: $roadmap)
  }
`;
