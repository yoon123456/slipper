import { gql } from "@apollo/client";

// export const CREATE_BOARD = gql`
//   mutation createBoard($createBoardInput: CreateBoardInput!) {
//     createBoard(createBoardInput: $createBoardInput) {
//       id
//       images {
//         imageUrl
//       }
//     }
//   }
// `;

// ⬇️testCreateBoard(+email)!!!!!
export const CREATE_BOARD = gql`
  mutation testCreateBoard(
    $createBoardInput: CreateBoardInput!
    $email: String!
  ) {
    testCreateBoard(createBoardInput: $createBoardInput, email: $email) {
      id
      images {
        imageUrl
      }
      createdAt
      # user
      # nickname
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
      # user
      # nickname
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
