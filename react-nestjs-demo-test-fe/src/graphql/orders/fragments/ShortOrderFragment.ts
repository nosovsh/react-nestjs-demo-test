import { graphql } from "../../../graphql-generated";

export const ShortOrderFragment = graphql(/* GraphQL */ `
  fragment ShortOrder on Order {
    _id
    status
    createdAt
    updatedAt
    managerId
  }
`);
