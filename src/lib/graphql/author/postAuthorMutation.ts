import gql from "graphql-tag";

export const POST_AUTHOR = gql`
  mutation postAuthor($author: AuthorInput!) {
    postAuthor(author: $author) {
      id
      name
      iconUrl
      firebaseId
    }
  }
`;
