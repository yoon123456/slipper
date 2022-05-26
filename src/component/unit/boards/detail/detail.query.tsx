import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      createdAt
      updatedAt
      nickname
      category
      title
      contents
      score
      startDate
      endDate
      lat
      lng
      address
      place
      likeCount
      images {
        id
        imageUrl
      }
      user {
        nickname
        imageUrl
      }
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: String!) {
    deleteBoard(boardId: $boardId)
  }
`;
