import { gql } from "@apollo/client";

export const FIND_ALL_ROADMAPS = gql`
  query findRoadmap {
    findRoadmap {
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
      tags
      likes
      author {
        name
        iconUrl
      }
      updatedAt
    }
  }
`;

export const FIND_LATEST_ROADMAPS = gql`
  query findRoadmap($limit: Int!) {
    findRoadmap(limit: $limit, order: DESC, orderBy: UPDATEDAT) {
      id
      title
      category {
        id
        name
      }
      tags
      likes
      author {
        name
        iconUrl
      }
      updatedAt
    }
  }
`;
