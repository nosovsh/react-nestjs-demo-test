import { graphql } from "../../graphql-generated";

export const createOrderMutation = graphql(/* GraphQL */ `
  mutation createOrder($createOrderInput: CreateOrderInput!) {
    createOrder(createOrderInput: $createOrderInput) {
      _id
      status
      createdAt
      updatedAt
      managerId
    }
  }
`);
