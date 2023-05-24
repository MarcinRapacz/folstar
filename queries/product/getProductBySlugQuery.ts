import { GetProductBySlugQueryVariables } from "@/__generated__/graphql";

export const getProductBySlugQuery = ({
  slug,
}: GetProductBySlugQueryVariables) => ({
  query: `query getProductBySlug($slug: String!) {
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
  }`,
  variables: {
    slug,
  },
});
