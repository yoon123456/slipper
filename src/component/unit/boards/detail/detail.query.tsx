import { gql } from "@apollo/client";

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: String!) {
    deleteBoard(boardId: $boardId)
  }
`;
