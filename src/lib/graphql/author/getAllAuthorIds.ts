import { gql } from "@apollo/client";

export const GET_ALL_AUTHOR_IDS = gql`
  query getAllAuthors {
    getAllAuthors {
      id
    }
  }
`;
