import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      id
      images {
        imageUrl
      }
      createdAt
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
      user {
        email
        nickname
      }
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $boardId: String!
    $updateBoardInput: UpdateBoardInput!
  ) {
    updateBoard(boardId: $boardId, updateBoardInput: $updateBoardInput) {
      id
      images {
        imageUrl
      }
      createdAt
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
    }
  }
`;
