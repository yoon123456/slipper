import { gql } from "@apollo/client/core";

// 로그인 정보 가져오기
export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      email
      nickname
    }
  }
`;
