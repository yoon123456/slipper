//haeri 작업시작 22.05.23
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";
import WriteContainer from "../../../../src/component/unit/boards/write/write.container";

const FETCH_BOARD = gql`
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

export default function Edit() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );

  return <WriteContainer isEdit={true} data={data} />;
}
