import { GetCategoryBySlugQueryVariables } from "@/__generated__/graphql";

export const getCategoryBySlugQuery = ({
  slug,
}: GetCategoryBySlugQueryVariables) => ({
  query: `query getCategoryBySlug($slug: String!) {
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
  }`,
  variables: {
    slug,
  },
});
