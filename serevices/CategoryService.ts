import {
  GetCategoryBySlugQuery,
  GetCategoryListQuery,
  GetCategoryListQueryVariables,
  GetCategoryBySlugQueryVariables,
} from "@/__generated__/graphql";
import { getClient } from "@/lib/client";
import { getCategoryListQuery, getCategoryBySlugQuery } from "@/queries";

export class CategoryService {
  constructor(private api = getClient()) {}

  public async getAll() {
    const response = await this.api.query<
      GetCategoryListQuery,
      GetCategoryListQueryVariables
    >({
      query: getCategoryListQuery,
    });
    return response.data.categories;
  }

  public async getBySlug(slug: string) {
    const response = await this.api.query<
      GetCategoryBySlugQuery,
      GetCategoryBySlugQueryVariables
    >({
      query: getCategoryBySlugQuery,
      variables: {
        slug,
      },
    });
    return response.data.category;
  }
}
