export const getCategoryListQuery = () => ({
  query: `query getCategoryList {
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
}`,
});
