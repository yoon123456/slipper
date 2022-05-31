import { gql } from "@apollo/client";

export const FETCH_USER_BOARDS = gql`
  query fetchUserBoards($page: Int) {
    fetchUserBoards(page: $page) {
      id
      createdAt
      nickname
      category
      title
      contents
      thumbnail
      likeCount
      address
      place
    }
  }
`;
