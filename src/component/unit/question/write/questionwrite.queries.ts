import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation createComment($content: String!, $boardId: String!) {
    createComment(content: $content, boardId: $boardId)
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment($content: String!, $commentId: String!) {
    updateComment(content: $content, commentId: $commentId)
  }
`;
