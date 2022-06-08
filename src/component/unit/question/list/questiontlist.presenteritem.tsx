import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { timeForToday } from "../../../../commons/timefortoday/timeForToday";
import {
  IMutation,
  IMutationDeleteCommentArgs,
} from "../../../../commons/types/generated/types";
import AnswerListContainer from "../../answer/list/answerlist.container";
import QuestionWriteContainer from "../write/questionwrite.container";
import { DELETE_COMMENT, FETCH_COMMENTS } from "./questionlist.queries";
import * as S from "./questionlist.styles";
import { IQuestionListUIItem } from "./questionlist.types";

// 승현-22.05.26-댓글
export default function QuestionListUIItem(props: IQuestionListUIItem) {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  // const [question, setQuestion] = useState("");

  const [deleteComment] = useMutation<
    Pick<IMutation, "deleteComment">,
    IMutationDeleteCommentArgs
  >(DELETE_COMMENT);

  const onCLickQuestionAnswer = () => {
    setIsActive((prev) => !prev);
  };

  const onClickDelete = async () => {
    try {
      await deleteComment({
        variables: {
          commentId: props.el?.id,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: String(props.data?.fetchBoard.id) },
          },
        ],
      });
      Modal.success({ content: "댓글이 삭제되었습니다." });
    } catch (error) {
      Modal.error({ content: "댓글이 삭제되지않았습니다." });
    }
  };

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  return (
    <>
      <S.WrapperOut>
        {/* 댓글 디테일 */}
        {!isEdit && (
          <S.RowBox>
            <S.Profile>
              <S.ProfileImage
                src={
                  props.el?.imageUrl === ""
                    ? "/image/person.png"
                    : props.el?.imageUrl?.startsWith("https", 0)
                    ? `${props.el?.imageUrl}`
                    : `https://storage.googleapis.com/${props.el?.imageUrl}`
                }
              />
            </S.Profile>
            <S.RightBox>
              <S.Top>
                <S.Left>
                  <S.Name>{props.el?.nickname}</S.Name>
                  <S.Time>{timeForToday(props.el?.createdAt)}</S.Time>
                </S.Left>
                <S.Option>
                  <S.Edit onClick={onClickUpdate}>수정</S.Edit>
                  <S.Delete onClick={onClickDelete} id={props.el?.id}>
                    삭제
                  </S.Delete>
                </S.Option>
              </S.Top>
              <S.Question>{props.el?.contents}</S.Question>
              <S.AnswerBox>
                <S.QuestionAnswer onClick={onCLickQuestionAnswer}>
                  답글
                </S.QuestionAnswer>
              </S.AnswerBox>
            </S.RightBox>
          </S.RowBox>
        )}
        {/* 답글 */}
        {/* 댓글수정 건드리지말것 */}
        {isEdit && <QuestionWriteContainer isEdit={isEdit} el={props.el} />}
        {/* 대댓글 목록 */}
        {isActive && <AnswerListContainer el={props.el} isActive={isActive} />}
      </S.WrapperOut>
    </>
  );
}
