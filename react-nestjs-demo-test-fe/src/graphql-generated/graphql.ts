/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateOrderHistoryItemInput = {
  exampleField?: InputMaybe<Scalars['Int']>;
};

export type CreateOrderInput = {
  managerId?: InputMaybe<Scalars['String']>;
};

export type CreateUserInput = {
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOrder: Order;
  createOrderHistoryItem: OrderHistoryItem;
  createUser: User;
  removeOrder?: Maybe<Order>;
  removeOrderHistoryItem?: Maybe<OrderHistoryItem>;
  removeUser?: Maybe<User>;
  updateOrder: Order;
  updateOrderHistoryItem: OrderHistoryItem;
  updateUser: User;
};


export type MutationCreateOrderArgs = {
  createOrderInput: CreateOrderInput;
};


export type MutationCreateOrderHistoryItemArgs = {
  createOrderHistoryItemInput: CreateOrderHistoryItemInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveOrderArgs = {
  id: Scalars['String'];
};


export type MutationRemoveOrderHistoryItemArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['String'];
};


export type MutationUpdateOrderArgs = {
  updateOrderInput: UpdateOrderInput;
};


export type MutationUpdateOrderHistoryItemArgs = {
  updateOrderHistoryItemInput: UpdateOrderHistoryItemInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Order = {
  __typename?: 'Order';
  _id: Scalars['String'];
  createdAt: Scalars['String'];
  managerId?: Maybe<Scalars['String']>;
  orderHistoryItems: Array<OrderHistoryItem>;
  status: OrderStatus;
  updatedAt: Scalars['String'];
};

export type OrderHistoryItem = {
  __typename?: 'OrderHistoryItem';
  _id: Scalars['String'];
  createdAt: Scalars['String'];
  orderId: Scalars['String'];
  status: Scalars['String'];
};

export enum OrderStatus {
  Complete = 'COMPLETE',
  InProgress = 'IN_PROGRESS',
  Open = 'OPEN'
}

export type Query = {
  __typename?: 'Query';
  order: Order;
  orderHistoryItem?: Maybe<OrderHistoryItem>;
  orderHistoryItems: Array<Maybe<OrderHistoryItem>>;
  orders: Array<Order>;
  user: User;
  users: Array<User>;
};


export type QueryOrderArgs = {
  id: Scalars['String'];
};


export type QueryOrderHistoryItemArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type UpdateOrderHistoryItemInput = {
  _id: Scalars['Int'];
};

export type UpdateOrderInput = {
  _id: Scalars['String'];
  managerId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<OrderStatus>;
};

export type UpdateUserInput = {
  _id: Scalars['String'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  name: Scalars['String'];
};

export type CreateOrderMutationVariables = Exact<{
  createOrderInput: CreateOrderInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'Order', _id: string, status: OrderStatus, createdAt: string, updatedAt: string, managerId?: string | null } };

export type OrderHistoryItemsFragmentFragment = { __typename?: 'Order', _id: string, orderHistoryItems: Array<{ __typename?: 'OrderHistoryItem', _id: string, status: string, createdAt: string }> } & { ' $fragmentName'?: 'OrderHistoryItemsFragmentFragment' };

export type ShortOrderFragment = { __typename?: 'Order', _id: string, status: OrderStatus, createdAt: string, updatedAt: string, managerId?: string | null } & { ' $fragmentName'?: 'ShortOrderFragment' };

export type OrderWithHistoryItemsQueryQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type OrderWithHistoryItemsQueryQuery = { __typename?: 'Query', order: { __typename?: 'Order', _id: string, orderHistoryItems: Array<{ __typename?: 'OrderHistoryItem', _id: string, status: string, createdAt: string }> } };

export type OrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type OrdersQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'Order', _id: string, status: OrderStatus, createdAt: string, updatedAt: string, managerId?: string | null }> };

export type UpdateOrderMutationVariables = Exact<{
  updateOrderInput: UpdateOrderInput;
}>;


export type UpdateOrderMutation = { __typename?: 'Mutation', updateOrder: { __typename?: 'Order', _id: string, status: OrderStatus, createdAt: string, updatedAt: string, managerId?: string | null } };

export const OrderHistoryItemsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderHistoryItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"orderHistoryItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<OrderHistoryItemsFragmentFragment, unknown>;
export const ShortOrderFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShortOrder"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"managerId"}}]}}]} as unknown as DocumentNode<ShortOrderFragment, unknown>;
export const CreateOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createOrderInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createOrderInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createOrderInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"managerId"}}]}}]}}]} as unknown as DocumentNode<CreateOrderMutation, CreateOrderMutationVariables>;
export const OrderWithHistoryItemsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"orderWithHistoryItemsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"orderHistoryItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<OrderWithHistoryItemsQueryQuery, OrderWithHistoryItemsQueryQueryVariables>;
export const OrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"orders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"managerId"}}]}}]}}]} as unknown as DocumentNode<OrdersQuery, OrdersQueryVariables>;
export const UpdateOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateOrderInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateOrderInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateOrderInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"managerId"}}]}}]}}]} as unknown as DocumentNode<UpdateOrderMutation, UpdateOrderMutationVariables>;