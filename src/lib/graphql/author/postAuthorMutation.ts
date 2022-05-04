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

export const EDIT_AUTHOR = gql`
  mutation editAuthor($author: AuthorEditInput!) {
    editAuthor(author: $author) {
      id
      name
      iconUrl
      firebaseId
    }
  }
`;
