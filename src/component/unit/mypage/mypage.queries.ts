import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      # email
      nickname
      imageUrl
      # introduce
    }
  }
`;
