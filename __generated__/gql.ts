/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\n  query getCategoryBySlug($slug: String!) {\n    category(where: { slug: $slug }) {\n      id\n      name\n      description\n      image {\n        fileName\n        id\n        url\n        height\n        width\n      }\n      products {\n        id\n        name\n        slug\n        images(first: 1) {\n          id\n          url\n          fileName\n          height\n          width\n        }\n      }\n      seo {\n        metaTitle\n        metaDescription\n      }\n    }\n  }\n":
    types.GetCategoryBySlugDocument,
  "\n  query getCategoryList {\n    categories {\n      createdAt\n      description\n      id\n      name\n      publishedAt\n      slug\n      updatedAt\n      image {\n        fileName\n        id\n        url\n        height\n        width\n      }\n    }\n  }\n":
    types.GetCategoryListDocument,
  "\n  query getProductBySlug($slug: String!) {\n    product(where: { slug: $slug }) {\n      slug\n      description {\n        html\n      }\n      name\n      price\n      tags {\n        id\n        name\n      }\n      id\n      availability\n      images {\n        fileName\n        id\n        url\n        height\n        width\n      }\n      category {\n        id\n        name\n        slug\n      }\n      seo {\n        metaTitle\n        metaDescription\n      }\n    }\n  }\n":
    types.GetProductBySlugDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query getCategoryBySlug($slug: String!) {\n    category(where: { slug: $slug }) {\n      id\n      name\n      description\n      image {\n        fileName\n        id\n        url\n        height\n        width\n      }\n      products {\n        id\n        name\n        slug\n        images(first: 1) {\n          id\n          url\n          fileName\n          height\n          width\n        }\n      }\n      seo {\n        metaTitle\n        metaDescription\n      }\n    }\n  }\n"
): (typeof documents)["\n  query getCategoryBySlug($slug: String!) {\n    category(where: { slug: $slug }) {\n      id\n      name\n      description\n      image {\n        fileName\n        id\n        url\n        height\n        width\n      }\n      products {\n        id\n        name\n        slug\n        images(first: 1) {\n          id\n          url\n          fileName\n          height\n          width\n        }\n      }\n      seo {\n        metaTitle\n        metaDescription\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query getCategoryList {\n    categories {\n      createdAt\n      description\n      id\n      name\n      publishedAt\n      slug\n      updatedAt\n      image {\n        fileName\n        id\n        url\n        height\n        width\n      }\n    }\n  }\n"
): (typeof documents)["\n  query getCategoryList {\n    categories {\n      createdAt\n      description\n      id\n      name\n      publishedAt\n      slug\n      updatedAt\n      image {\n        fileName\n        id\n        url\n        height\n        width\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query getProductBySlug($slug: String!) {\n    product(where: { slug: $slug }) {\n      slug\n      description {\n        html\n      }\n      name\n      price\n      tags {\n        id\n        name\n      }\n      id\n      availability\n      images {\n        fileName\n        id\n        url\n        height\n        width\n      }\n      category {\n        id\n        name\n        slug\n      }\n      seo {\n        metaTitle\n        metaDescription\n      }\n    }\n  }\n"
): (typeof documents)["\n  query getProductBySlug($slug: String!) {\n    product(where: { slug: $slug }) {\n      slug\n      description {\n        html\n      }\n      name\n      price\n      tags {\n        id\n        name\n      }\n      id\n      availability\n      images {\n        fileName\n        id\n        url\n        height\n        width\n      }\n      category {\n        id\n        name\n        slug\n      }\n      seo {\n        metaTitle\n        metaDescription\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
