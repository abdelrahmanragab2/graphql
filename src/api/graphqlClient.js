// api/graphqlClient.js
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(
  "https://graphqlplaceholder.vercel.app/graphql"
);

export default client;
