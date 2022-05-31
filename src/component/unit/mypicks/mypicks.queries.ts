import { gql } from "@apollo/client";

export const FETCH_LIKE_BOARDS = gql`
  query fetchLikeBoards($page: Int) {
    fetchLikeBoards(page: $page) {
      board {
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
  }
`;
