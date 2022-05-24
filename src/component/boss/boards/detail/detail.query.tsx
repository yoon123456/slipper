import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      createdAt
      updatedAt
      user {
        email
        nickname
        phone
        imageUrl
        introduce
        createAt
        role
      }
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
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: String!) {
    deleteBoard(boardId: $boardId)
  }
`;

// export const FETCH_USER = gql`
//   query fetchUser($fetchUser: Join!) {
//     fetchUser(fetchuser: $fetchUser) {
//       email
//       nickname
//       imageUrl
//     }
//   }
// `;
