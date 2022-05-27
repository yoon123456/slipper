import { gql } from "@apollo/client";

// export const FETCH_BOARDS_PAGE = gql`
//   query fetchBoardsPage($page: Float!, $category: String!, $search: String!) {
//     fetchBoardsPage(page: $page, category: $category, search: $search)
//   }
// `;

export const FETCH_BOARDS_PAGE = gql`
  query fetchBoardsPage($category: String!, $search: String!) {
    fetchBoardsPage(category: $category, search: $search)
  }
`;
