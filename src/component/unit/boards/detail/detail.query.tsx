import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId)
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: String!) {
    deleteBoard(boardId: $boardId)
  }
`;

export const CLICK_LIKE = gql`
  mutation clickLike($boardId: String!) {
    clickLike(boardId: $boardId) {
      id
      likeCount
    }
  }
`;
