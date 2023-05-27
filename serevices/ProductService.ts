import {
  GetProductBySlugQuery,
  GetProductBySlugQueryVariables,
  GetProductListQuery,
  GetProductListQueryVariables,
} from "@/__generated__/graphql";
import { getClient } from "@/lib/client";
import { getProductBySlugQuery, getProductListQuery } from "@/queries";

export class ProductService {
  constructor(private api = getClient()) {}

  getAll() {
    return this.api.query<GetProductListQuery, GetProductListQueryVariables>({
      body: getProductListQuery(),
    });
  }

  getBySlug(slug: string) {
    return this.api.query<
      GetProductBySlugQuery,
      GetProductBySlugQueryVariables
    >({
      body: getProductBySlugQuery({ slug }),
    });
  }
}
