import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import AnswerWriteContainer from "../../answer/write/answerwrite.container";
import * as S from "./answerlist.styles";
import { IAnswerListUIItem } from "./answerlist.types";
import { DELETE_SUB_COMMENT, FETCH_SUB_COMMENT } from "./answerlist.queries";
import { timeForToday } from "../../../../commons/timefortoday/timeForToday";
import {
  IMutation,
  IMutationDeleteSubCommentArgs,
} from "../../../../commons/types/generated/types";

export default function AnswernListUIItem(props: IAnswerListUIItem) {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);

  const [deleteSubComment] = useMutation<
    Pick<IMutation, "deleteSubComment">,
    IMutationDeleteSubCommentArgs
  >(DELETE_SUB_COMMENT);

  const onClickDelete = async () => {
    try {
      await deleteSubComment({
        variables: {
          subCommentId: String(props?.subCommentEl?.id),
        },
        refetchQueries: [
          {
            query: FETCH_SUB_COMMENT,
            variables: { commentId: String(props.el?.id) },
          },
        ],
      });
      Modal.success({ content: "댓글이 삭제 성공." });
    } catch (error) {
      Modal.error({ content: "댓글이 삭제 실패" });
    }
  };

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  return (
    <>
      <S.WrapperOut>
        {/* 대댓글 디테일 */}
        {props.isActive && !isEdit && (
          <S.RowBox>
            <S.Profile>
              <S.ProfileImage
                src={
                  props.subCommentEl?.imageUrl === ""
                    ? "/image/person.png"
                    : props.subCommentEl?.imageUrl.startsWith("https", 0)
                    ? `${props.subCommentEl?.imageUrl}`
                    : `https://storage.googleapis.com/${props.subCommentEl?.imageUrl}`
                }
              />
            </S.Profile>
            <S.RightBox>
              <S.Top>
                <S.Left>
                  <S.Name>{props.subCommentEl.nickname}</S.Name>
                  <S.Time>{timeForToday(props.subCommentEl.createdAt)}</S.Time>
                </S.Left>
                <S.Option>
                  <S.Edit onClick={onClickUpdate}>수정</S.Edit>
                  <S.Delete onClick={onClickDelete} id={props.subCommentEl.id}>
                    삭제
                  </S.Delete>
                </S.Option>
              </S.Top>
              <S.Question>{props.subCommentEl.contents}</S.Question>
            </S.RightBox>
          </S.RowBox>
        )}
        {props.isActive && isEdit && (
          <AnswerWriteContainer
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            el={props.el}
            isActive={props.isActive}
            data={props.data}
            subCommentEl={props.subCommentEl}
            onClickDelete={onClickDelete}
          />
        )}
      </S.WrapperOut>
    </>
  );
}
