import { gql } from "@apollo/client";

export const ROADMAP_FIELDS = gql`
  fragment RoadmapFields on Roadmap {
    id
    title
    category {
      id
      name
    }
    items {
      id
    }
    likes
    author {
      name
      iconUrl
    }
    updatedAt
  }
`;

export const ROADMAP_ALL_FIELDS = gql`
  fragment RoadmapAllFields on Roadmap {
    id
    title
    items {
      id
      title
      description
      links {
        url
      }
    }
    category {
      id
      name
    }
    likes
    author {
      name
      iconUrl
    }
    updatedAt
  }
`;