import { gql } from "@apollo/client";

export const CREATE_SUB_COMMENT = gql`
  mutation createSubComment($content: String!, $commentId: String!) {
    createSubComment(content: $content, commentId: $commentId)
  }
`;

export const UPDATE_SUB_COMMENT = gql`
  mutation updateSubComment($content: String!, $subCommentId: String!) {
    updateSubComment(content: $content, subCommentId: $subCommentId)
  }
`;
