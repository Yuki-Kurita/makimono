import { gql } from "@apollo/client";

export const FIND_ALL_CATEGORIES = gql`
  query findAllCategory {
    findAllCategories {
      id
      name
    }
  }
`;
