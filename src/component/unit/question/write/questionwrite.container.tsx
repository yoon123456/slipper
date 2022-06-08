import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateCommentArgs,
  IMutationUpdateCommentArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARD } from "../../boards/detail/detail.query";
import { FETCH_COMMENTS } from "../list/questionlist.queries";
import QuestionWritePresenter from "./questionwrite.presenter";
import { CREATE_COMMENT, UPDATE_COMMENT } from "./questionwrite.queries";
import { IQuestionWriteContainer } from "./questionwrite.types";

// 승현-22.05.25-댓글작성함수
export default function QuestionWriteContainer(props: IQuestionWriteContainer) {
  const router = useRouter();
  const [createComment] = useMutation<
    Pick<IMutation, "createComment">,
    IMutationCreateCommentArgs
  >(CREATE_COMMENT);
  const [updateComment] = useMutation<
    Pick<IMutation, "updateComment">,
    IMutationUpdateCommentArgs
  >(UPDATE_COMMENT);

  const [isActive, setIsActive] = useState(false);
  const [question, setQuestion] = useState("");

  const [isCancle, setIsCancle] = useState(false);

  const onChangeQuestion = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
    setIsActive(true);
  };
  console.log(props.data?.fetchBoard.id, "id");

  // 댓글 뮤테이션 날리기
  const onClickQuestion = async () => {
    try {
      if (question !== "") {
        await createComment({
          variables: {
            content: question,
            boardId: String(router.query.boardId),
          },
          refetchQueries: [
            {
              query: FETCH_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
        setQuestion("");
      }
    } catch (error) {
      Modal.error({ content: "댓글 등록에 실패하였습니다." });
    }
  };
  const onClickQuestionUpdate = async () => {
    try {
      await updateComment({
        variables: {
          commentId: props.el?.id,
          content: question,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setQuestion("");
      Modal.success({ content: "댓글이 수정되었습니다." });
    } catch (error) {
      Modal.error({ content: "댓글 수정에 실패하였습니다." });
    }
  };

  const onClickCancle = () => {
    setIsActive(false);
  };

  return (
    <QuestionWritePresenter
      onChangeQuestion={onChangeQuestion}
      onClickCancle={onClickCancle}
      onClickQuestion={onClickQuestion}
      onClickQuestionUpdate={onClickQuestionUpdate}
      isActive={isActive}
      isEdit={props.isEdit}
      isCancle={isCancle}
      question={question}
      el={props.el}
    />
  );
}
