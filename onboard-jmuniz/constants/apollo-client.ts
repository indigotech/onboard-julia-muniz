import { ApolloClient, InMemoryCache } from "@apollo/client";

const GRAPHQL_API =
  "https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql";

export const client = new ApolloClient({
  uri: GRAPHQL_API,
  cache: new InMemoryCache(),
});
