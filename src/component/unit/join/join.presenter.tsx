import * as S from "./join.styles";

export default function JoinPresenter() {
  return (
    <S.WrapperOut>
      <S.WrapperIn>
        <S.Join>회원가입</S.Join>

        <S.Profile>
          <S.ProfileBox>
            <S.Input type="text" placeholder="아이디(이메일)" />
            <S.Input type="text" placeholder="닉네임" />
          </S.ProfileBox>
          <S.MyImage>image</S.MyImage>
        </S.Profile>

        <S.Check>
          <S.Input type="text" placeholder="핸드폰번호" />
          <S.NumberAsk>인증번호 요청</S.NumberAsk>
        </S.Check>
        <S.Check>
          <S.Input type="text" placeholder="인증번호" />
          <S.CheckEnd>인증완료</S.CheckEnd>
        </S.Check>
        <S.PasswordCheck type="password" placeholder="비밀번호" />
        <S.PasswordCheck type="password" placeholder="비밀번호 확인" />
        <S.Introduce type="textarea" />
        <S.JoinSlipper>슬리퍼 신기</S.JoinSlipper>
      </S.WrapperIn>
    </S.WrapperOut>
  );
}
