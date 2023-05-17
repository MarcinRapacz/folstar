import { gql } from "@apollo/client";

export const getProductBySlugQuery = gql`
  query getProductBySlug($slug: String!) {
    product(where: { slug: $slug }) {
      slug
      description {
        html
      }
      name
      price
      tags {
        id
        name
      }
      id
      availability
      images {
        fileName
        id
        url
        height
        width
      }
      category {
        id
        name
        slug
      }
      seo {
        metaTitle
        metaDescription
      }
    }
  }
`;
