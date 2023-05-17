import {
  GetProductBySlugQuery,
  GetProductBySlugQueryVariables,
} from "@/__generated__/graphql";
import { getClient } from "@/lib/client";
import { getProductBySlugQuery } from "@/queries";

export class ProductService {
  constructor(private api = getClient()) {}

  async getBySlug(slug: string) {
    const response = await this.api.query<
      GetProductBySlugQuery,
      GetProductBySlugQueryVariables
    >({
      query: getProductBySlugQuery,
      variables: {
        slug,
      },
    });
    return response.data.product;
  }
}
