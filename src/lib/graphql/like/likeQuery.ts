import { gql } from "@apollo/client";

export const FETCH_IS_LIKED_BY_ME = gql`
  query fetchIsLikedByMe($roadmapId: String!) {
    fetchIsLikedByMe(roadmapId: $roadmapId) {
      id
      roadmapId
      isMine
    }
  }
`;
