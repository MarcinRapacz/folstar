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

  getAll() {
    return this.api.query<GetCategoryListQuery, GetCategoryListQueryVariables>({
      body: getCategoryListQuery(),
    });
  }

  getBySlug(slug: string) {
    return this.api.query<
      GetCategoryBySlugQuery,
      GetCategoryBySlugQueryVariables
    >({
      body: getCategoryBySlugQuery({ slug }),
    });
  }
}
