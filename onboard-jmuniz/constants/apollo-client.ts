import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getToken } from "./secure-store";

const GRAPHQL_API =
  "https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql";
const httpLink = createHttpLink({ uri: GRAPHQL_API });
const authLink = setContext(async () => {
  const token = await getToken();
  return {
    headers: {
      authorization: token,
    },
  };
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});
