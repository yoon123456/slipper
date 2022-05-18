import * as S from "./questionwrite.styles";
import { IQuestionWritePresenter } from "./questionwrite.types";

export default function QuestionWritePresenter(props: IQuestionWritePresenter) {
  return (
    <S.Div>
      <S.PersonBox>
        <S.Person src="/image/person.png"></S.Person>
      </S.PersonBox>
      <S.RightBox>
        <S.QuestionInput type="text" onChange={props.onChangeQuestion} />
        <S.Box isActive={props.isActive}>
          <S.ButtonBox>
            <S.Cancel>취소</S.Cancel>
            <S.Write isActive={props.isActive}>댓글</S.Write>
          </S.ButtonBox>
        </S.Box>
      </S.RightBox>
    </S.Div>
  );
}
