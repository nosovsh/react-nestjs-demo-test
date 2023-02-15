/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation createOrder($createOrderInput: CreateOrderInput!) {\n    createOrder(createOrderInput: $createOrderInput) {\n      _id\n      status\n      createdAt\n      updatedAt\n      managerId\n    }\n  }\n": types.CreateOrderDocument,
    "\n  fragment OrderHistoryItemsFragment on Order {\n    _id\n    orderHistoryItems {\n      _id\n      status\n      createdAt\n    }\n  }\n": types.OrderHistoryItemsFragmentFragmentDoc,
    "\n  fragment ShortOrder on Order {\n    _id\n    status\n    createdAt\n    updatedAt\n    managerId\n  }\n": types.ShortOrderFragmentDoc,
    "\n  query orderWithHistoryItemsQuery($id: String!) {\n    order(id: $id) {\n      _id\n      orderHistoryItems {\n        _id\n        status\n        createdAt\n      }\n    }\n  }\n": types.OrderWithHistoryItemsQueryDocument,
    "\n  query orders {\n    orders {\n      _id\n      status\n      createdAt\n      updatedAt\n      managerId\n    }\n  }\n": types.OrdersDocument,
    "\n  mutation updateOrder($updateOrderInput: UpdateOrderInput!) {\n    updateOrder(updateOrderInput: $updateOrderInput) {\n      _id\n      status\n      createdAt\n      updatedAt\n      managerId\n    }\n  }\n": types.UpdateOrderDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
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
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createOrder($createOrderInput: CreateOrderInput!) {\n    createOrder(createOrderInput: $createOrderInput) {\n      _id\n      status\n      createdAt\n      updatedAt\n      managerId\n    }\n  }\n"): (typeof documents)["\n  mutation createOrder($createOrderInput: CreateOrderInput!) {\n    createOrder(createOrderInput: $createOrderInput) {\n      _id\n      status\n      createdAt\n      updatedAt\n      managerId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment OrderHistoryItemsFragment on Order {\n    _id\n    orderHistoryItems {\n      _id\n      status\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  fragment OrderHistoryItemsFragment on Order {\n    _id\n    orderHistoryItems {\n      _id\n      status\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ShortOrder on Order {\n    _id\n    status\n    createdAt\n    updatedAt\n    managerId\n  }\n"): (typeof documents)["\n  fragment ShortOrder on Order {\n    _id\n    status\n    createdAt\n    updatedAt\n    managerId\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query orderWithHistoryItemsQuery($id: String!) {\n    order(id: $id) {\n      _id\n      orderHistoryItems {\n        _id\n        status\n        createdAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query orderWithHistoryItemsQuery($id: String!) {\n    order(id: $id) {\n      _id\n      orderHistoryItems {\n        _id\n        status\n        createdAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query orders {\n    orders {\n      _id\n      status\n      createdAt\n      updatedAt\n      managerId\n    }\n  }\n"): (typeof documents)["\n  query orders {\n    orders {\n      _id\n      status\n      createdAt\n      updatedAt\n      managerId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateOrder($updateOrderInput: UpdateOrderInput!) {\n    updateOrder(updateOrderInput: $updateOrderInput) {\n      _id\n      status\n      createdAt\n      updatedAt\n      managerId\n    }\n  }\n"): (typeof documents)["\n  mutation updateOrder($updateOrderInput: UpdateOrderInput!) {\n    updateOrder(updateOrderInput: $updateOrderInput) {\n      _id\n      status\n      createdAt\n      updatedAt\n      managerId\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;