import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ApolloLink } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalstyles";

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
                <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
