import { gql } from "@apollo/client";

export const getCategoryListQuery = gql`
  query getCategoryList {
    categories {
      createdAt
      description
      id
      name
      publishedAt
      slug
      updatedAt
      image {
        fileName
        id
        url
        height
        width
      }
    }
  }
`;
