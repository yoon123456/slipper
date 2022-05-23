//해리 작업 5/23
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import WriteContainer from "../../../../src/component/unit/boards/write/write.container";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      createdAt
      updatedAt
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
      images {
        imageUrl
      }
    }
  }
`;

export default function Edit() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return <WriteContainer isEdit={true} data={data} />;
}
