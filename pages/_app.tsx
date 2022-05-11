import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ApolloLink } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const uplodLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uplodLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
