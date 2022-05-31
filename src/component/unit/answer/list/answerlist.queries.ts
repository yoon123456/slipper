import { gql, useQuery } from "@apollo/client";

export const FETCH_SUB_COMMENT = gql`
  query fetchSubComment($commentId: String!) {
    fetchSubComment(commentId: $commentId) {
      id
      nickname
      contents
      createdAt
      imageUrl
    }
  }
`;

export const DELETE_SUB_COMMENT = gql`
  mutation deleteSubComment($subCommentId: String!) {
    deleteSubComment(subCommentId: $subCommentId)
  }
`;

export const UPDATE_SUB_COMMENT = gql`
  mutation updateSubComment($content: String!, $SubCommentId: String!) {
    updateComment(content: $content, SubCommentId: $SubCommentId)
  }
`;
