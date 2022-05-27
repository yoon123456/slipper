import * as S from "./questionwrite.styles";
import { IQuestionWritePresenter } from "./questionwrite.types";

export default function QuestionWritePresenter(props: IQuestionWritePresenter) {
  return (
    <S.Div>
      <S.PersonBox>
        <S.Person src="/image/person.png"></S.Person>
      </S.PersonBox>
      <S.CommentBox>
        <S.Top>
          <S.Name>attosisss_</S.Name>
          <S.Time>17시간전</S.Time>
        </S.Top>
        <S.QuestionInput
          type="text"
          onChange={props.onChangeQuestion}
          placeholder="악플은 관리자에 의해 삭제될 수 있습니다.
          예쁜말로 댓글 달아주세요."
        />
        <S.Box isActive={props.isActive}>
          <S.ButtonBox>
            <S.Cancel onClick={props.onClickCancle}>취소</S.Cancel>
            <S.Write isActive={props.isActive}>댓글</S.Write>
          </S.ButtonBox>
        </S.Box>
      </S.CommentBox>
    </S.Div>
  );
}
