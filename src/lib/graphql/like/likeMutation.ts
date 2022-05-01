import { gql } from "@apollo/client";

export const UPDATE_LIKE = gql`
  mutation updateLike($roadmapId: String!) {
    updateLike(roadmapId: $roadmapId) {
      roadmapId
    }
  }
`;
