import { gql } from "@apollo/client";

export const FETCH_COMMENTS = gql`
  query fetchComments($boardId: String!) {
    fetchComments(boardId: $boardId) {
      id
      nickname
      contents
      createdAt
      imageUrl
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($commentId: String!) {
    deleteComment(commentId: $commentId)
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment($content: String!, $commentId: String!) {
    updateComment(content: $content, commentId: $commentId)
  }
`;
