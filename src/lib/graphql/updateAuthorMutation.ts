import gql from "graphql-tag";

export const UPDATE_AUTHOR = gql`
  mutation postAuthor($author: AuthorInput!) {
    postAuthor(author: $author) {
      id
      name
      iconUrl
      firebaseId
    }
  }
`;
