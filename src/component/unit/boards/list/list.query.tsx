import { gql } from "@apollo/client";

// 리스트 뿌려주는 query (무한 스크롤)
export const FETCH_BOARDS_PAGE = gql`
  query fetchBoardsPage(
    $page: Int
    $category: String
    $search: String
    $sortType: String
  ) {
    fetchBoardsPage(
      page: $page
      category: $category
      search: $search
      sortType: $sortType
    )
  }
`;

// 좋아요 누르는 mutation
export const CLICK_LIKE = gql`
  mutation clickLike($boardId: String!) {
    clickLike(boardId: $boardId) {
      isLike
    }
  }
`;

// 유저의 정보를 불러오는 query
export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      email
      nickname
      subStart
      subEnd
      subType
      imageUrl
    }
  }
`;

// 유저가 좋아요 누른 갯수, boolean, board 정보를 불러오는 query
export const FETCH_USER_LIKE = gql`
  query fetchUserLike($boardId: String!) {
    fetchUserLike(boardId: $boardId) {
      isLike
      board {
        id
        likeCount
      }
    }
  }
`;

export const UPDATE_PAYMENT = gql`
  mutation updatePayment($userId: String!) {
    updatePayment(userId: $userId)
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;
