import { graphql } from "../../graphql-generated";

export const updateOrderMutation = graphql(`
  mutation updateOrder($updateOrderInput: UpdateOrderInput!) {
    updateOrder(updateOrderInput: $updateOrderInput) {
      _id
      status
      createdAt
      updatedAt
      managerId
    }
  }
`);
