import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      user {
        id
        email
        nickname
        phone
        imageUrl
        introduce
        createAt
      }
      category
      title
      contents
      score
      period
      lat
      lng
      address
      place
      likeCount
      images
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
