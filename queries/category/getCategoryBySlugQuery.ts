import { gql } from "@apollo/client";

export const getCategoryBySlugQuery = gql`
  query getCategoryBySlug($slug: String!) {
    category(where: { slug: $slug }) {
      id
      name
      description
      image {
        fileName
        id
        url
        height
        width
      }
      products {
        id
        name
        slug
        images(first: 1) {
          id
          url
          fileName
          height
          width
        }
      }
      seo {
        metaTitle
        metaDescription
      }
    }
  }
`;
