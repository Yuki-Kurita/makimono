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
  query findLatestRoadmap($limit: Int!) {
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

export const FIND_ROADMAPS_BY_CATEGORY = gql`
  query findRoadmapByCategory($categoryId: Int!, $limit: Int!) {
    findRoadmap(categoryId: $categoryId, limit: $limit) {
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
