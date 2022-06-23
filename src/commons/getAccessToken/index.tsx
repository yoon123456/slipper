// 예원 작업 5.23

import { GraphQLClient, gql } from "graphql-request";

// restoreAccessToken 불러오는 gql
const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken
  }
`;

export async function getAccessToken() {

  try {
    const graphQLClient = new GraphQLClient(
      "https://backend.slipperofficial.shop/graphql",
      // https로 통신하는 이유는 secure option 떄문이다
      { credentials: "include" }
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken;
    return newAccessToken;
  } catch (error) {
    console.log(error, "에러");

  }
}
