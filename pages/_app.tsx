// 예원 작업 5.24

import "antd/dist/antd.css";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalstyles";
import Layout from "../src/commons/layout";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/commons/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        {/* <ApolloProvider client={client}> */}
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </ApolloProvider> */}
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
