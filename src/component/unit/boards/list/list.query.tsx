import { gql } from "@apollo/client";

export const FETCH_BOARDS_PAGE = gql`
  query fetchBoardsPage($page: Int!, $category: String!, $search: String!) {
    fetchBoardsPage(page: $page, category: $category, search: $search)
  }
`;


