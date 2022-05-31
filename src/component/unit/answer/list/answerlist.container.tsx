import { useQuery } from "@apollo/client";
import AnswerListPresenter from "./answerlist.presenter";
import { FETCH_SUB_COMMENT } from "./answerlist.queries";
import { IAnswerListContainer } from "./answerlist.types";

export default function AnswerListContainer(props: IAnswerListContainer) {
  const { data } = useQuery(FETCH_SUB_COMMENT, {
    variables: { commentId: String(props.el?.id) },
  });

  return (
    <AnswerListPresenter data={data} el={props.el} isActive={props.isActive} />
  );
}
