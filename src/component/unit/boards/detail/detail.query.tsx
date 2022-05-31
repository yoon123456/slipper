import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      createdAt
      nickname
      category
      title
      contents
      thumbnail
      score
      startDate
      endDate
      lat
      lng
      address
      place
      placePhone
      placeUrl
      likeCount
      images {
        id
        imageUrl
      }
      user {
        id
        imageUrl
        role
      }
    }
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
