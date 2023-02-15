import { graphql } from "../../graphql-generated";

export const orderHistoryItemsQuery = graphql(/* GraphQL */ `
  query orderWithHistoryItemsQuery($id: String!) {
    order(id: $id) {
      _id
      orderHistoryItems {
        _id
        status
        createdAt
      }
    }
  }
`);
