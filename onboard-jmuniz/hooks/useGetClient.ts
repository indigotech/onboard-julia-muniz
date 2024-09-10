import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const GRAPHQL_API =
  "https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql";

export default function useGetClient(token: string) {
  const httpLink = createHttpLink({ uri: GRAPHQL_API });
  const authLink = setContext(() => {
    return {
      headers: {
        authorization: token,
      },
    };
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: token ? authLink.concat(httpLink) : httpLink,
  });

  return [client];
}
