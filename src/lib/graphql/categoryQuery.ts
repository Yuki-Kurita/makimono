import { gql } from "@apollo/client";

export const FIND_CATEGORIES = gql`
  query findAllCategory {
    findAllCategories {
      id
      name
    }
  }
`;
