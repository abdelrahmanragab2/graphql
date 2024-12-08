// api/queries.js
import { gql } from "graphql-request";

export const GET_USER = gql`
  query {
    users(first: 3) {
      name
      email
      phone
      address {
        street
        city
        zipcode
      }
      company {
        name
        catchPhrase
      }
      posts {
        title
        body
      }
    }
  }
`;
