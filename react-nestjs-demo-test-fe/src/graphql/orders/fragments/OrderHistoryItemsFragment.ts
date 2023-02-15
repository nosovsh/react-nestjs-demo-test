import { graphql } from "../../../graphql-generated";

export const OrderHistoryItemsFragment = graphql(/* GraphQL */ `
  fragment OrderHistoryItemsFragment on Order {
    _id
    orderHistoryItems {
      _id
      status
      createdAt
    }
  }
`);
