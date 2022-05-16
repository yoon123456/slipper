import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ApolloLink } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalstyles";
import Layout from "../src/commons/layout";
import { RecoilRoot } from "recoil";
function MyApp({ Component, pageProps }: AppProps) {
  const uplodLink = createUploadLink({
    uri: "https://backend.slipperofficial.shop/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uplodLink]),
    cache: new InMemoryCache(),
  });

  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default MyApp;
