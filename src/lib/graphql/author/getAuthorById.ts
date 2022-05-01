import { gql } from "@apollo/client";

export const GET_AUTHOR_BY_ID = gql`
  query getAuthorById {
    getAuthorById {
      id
      name
      iconUrl
    }
  }
`;
