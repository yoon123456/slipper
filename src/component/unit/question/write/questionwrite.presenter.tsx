import * as S from "./questionwrite.styles";
import { IQuestionWritePresenter } from "./questionwrite.types";

export default function QuestionWritePresenter(props: IQuestionWritePresenter) {
  return (
    <S.Div>
      <S.CommentBox>
        <S.QuestionInput
          value={props.question}
          onChange={props.onChangeQuestion}
          placeholder="악플은 관리자에 의해 삭제될 수 있습니다.
          예쁜말로 댓글 달아주세요."
        />
        <S.Box isActive={props.isActive}>
          <S.ButtonBox>
            <S.Cancel onClick={props.onClickCancle}>취소</S.Cancel>
            <S.Write
              isActive={props.isActive}
              onClick={
                props.isEdit
                  ? props.onClickQuestionUpdate
                  : props.onClickQuestion
              }
            >
              {props.isEdit ? "수정" : "댓글"}
            </S.Write>
          </S.ButtonBox>
        </S.Box>
      </S.CommentBox>
    </S.Div>
  );
}
