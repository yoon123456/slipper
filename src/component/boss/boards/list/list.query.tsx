import { gql } from "@apollo/client";

export const FETCH_BOARDS_PAGE = gql`
  query testFetchBoardsPage($page: Int, $category: String, $search: String) {
    testFetchBoardsPage(page: $page, category: $category, search: $search)
  }
`;
