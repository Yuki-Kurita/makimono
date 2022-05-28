import { auth } from "@/config/firebaseConfig";
import { ApolloClient, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { cache } from "./cache";

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_ENDPOINT}/graphql`,
});

const authLink = setContext(async (_, context) => {
  try {
    const token = await auth.currentUser?.getIdToken(true);
    return {
      headers: {
        ...context.headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  } catch (e) {
    console.error(e);
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache,
});
