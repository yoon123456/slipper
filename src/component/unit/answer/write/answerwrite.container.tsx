import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateSubCommentArgs,
  IMutationUpdateSubCommentArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_SUB_COMMENT } from "../list/answerlist.queries";
import AnswerWritePresenter from "./answerwrite.presenter";
import { CREATE_SUB_COMMENT, UPDATE_SUB_COMMENT } from "./answerwrite.queries";
import { IAnswerWriteContainer } from "./answerwrite.types";

export default function AnswerWriteContainer(props: IAnswerWriteContainer) {
  const router = useRouter();
  const [createSubComment] = useMutation<
    Pick<IMutation, "createSubComment">,
    IMutationCreateSubCommentArgs
  >(CREATE_SUB_COMMENT);
  const [updateSubComment] = useMutation<
    Pick<IMutation, "updateSubComment">,
    IMutationUpdateSubCommentArgs
  >(UPDATE_SUB_COMMENT);

  const [question, setQuestion] = useState("");

  const [isActiveButton, setIsActiveButton] = useState(false);

  const onChangeQuestionInput = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
    setIsActiveButton(true);
  };

  const onClickSubQuestion = async () => {
    try {
      if (question !== "") {
        await createSubComment({
          variables: {
            content: question,
            commentId: String(props.el?.id),
          },
          refetchQueries: [
            {
              query: FETCH_SUB_COMMENT,
              variables: { commentId: String(props.el?.id) },
            },
          ],
        });
        Modal.success({ content: "대댓글이 등록되었습니당" });
      }
    } catch (error) {
      Modal.error({ content: "댓글 등록에 실패하였습니당." });
    }
    setQuestion("");
    console.log("여기");
  };
  const onClickSubQuestionUpdate = async () => {
    try {
      await updateSubComment({
        variables: {
          subCommentId: String(props?.subCommentEl?.id),
          content: question,
        },
        refetchQueries: [
          {
            query: FETCH_SUB_COMMENT,
            variables: { commentId: String(props.el?.id) },
          },
        ],
      });
      props.setIsEdit(false);
      setQuestion("");
      Modal.success({ content: "댓글이 수정되었습니당." });
    } catch (error) {
      Modal.error({ content: "댓글 수정에 실패하였습니당." });
    }
  };

  return (
    // 승현-22.05.26-댓글의 댓글
    <AnswerWritePresenter
      isActive={props.isActive}
      subCommentEl={props?.subCommentEl}
      onClickSubQuestionUpdate={onClickSubQuestionUpdate}
      onClickSubQuestion={onClickSubQuestion}
      onChangeQuestionInput={onChangeQuestionInput}
      isActiveButton={isActiveButton}
      isEdit={props.isEdit}
      data={props.data}
      onClickDelete={props.onClickDelete}
      question={question}
      setIsActive={function (active: boolean): void {
        throw new Error("Function not implemented.");
      }}
      onClickClose={function (): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
}
