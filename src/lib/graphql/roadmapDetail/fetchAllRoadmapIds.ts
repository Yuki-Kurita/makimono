import { gql } from "@apollo/client";

export const FETCH_ALL_ROADMAP_IDS = gql`
  query fetchAllRoadmapIds {
    findRoadmap {
      id
    }
  }
`;
