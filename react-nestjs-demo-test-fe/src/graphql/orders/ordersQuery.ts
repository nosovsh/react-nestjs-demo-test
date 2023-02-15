import { graphql } from "../../graphql-generated";

export const ordersQuery = graphql(/* GraphQL */ `
  query orders {
    orders {
      _id
      status
      createdAt
      updatedAt
      managerId
    }
  }
`);
