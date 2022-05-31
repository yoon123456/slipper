import { useQuery } from "@apollo/client";
import QuestionListPresenter from "./questionlist.presenter";
import { FETCH_COMMENTS } from "./questionlist.queries";
import { IQuestionListContainer } from "./questionlist.types";

export default function QuestionListContainer(props: IQuestionListContainer) {
  const { data: listData } = useQuery(FETCH_COMMENTS, {
    variables: { boardId: String(props.data?.fetchBoard.id) },
  });

  return <QuestionListPresenter listData={listData} data={props.data} />;
}
