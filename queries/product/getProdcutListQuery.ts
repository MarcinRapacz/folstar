export const getProductListQuery = () => ({
  query: `query {
    products {
      slug
      id
    }
  }`,
});
