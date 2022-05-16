import * as S from "./login.styles";

export default function JoinPresenter() {
  return (
    <S.Wrapper>
      <S.WrapperOut>
        <S.WrapperIn>
          {/* <S.Join>{"Hi, I'm slipper"}</S.Join> */}
          <S.Join>{"Welcome to Slipper"}</S.Join>
          <S.Profile>
            <S.ProfileBox>
              <S.InputProfile type="text" placeholder="아이디(이메일)" />
              <S.PasswordCheck type="password" placeholder="비밀번호" />
            </S.ProfileBox>
          </S.Profile>

          <S.JoinSlipper>슬리퍼 신기</S.JoinSlipper>

          <S.Menu>
            <S.MenuBox>
              <S.IdFind>아이디 찾기</S.IdFind>
              <S.PasswordFind>비밀번호 찾기</S.PasswordFind>
              <S.Sign>슬리퍼 만들기</S.Sign>
            </S.MenuBox>
          </S.Menu>

          <S.Sns>
            <S.Orbox>
              <S.OrLeft></S.OrLeft>
              <S.Or>Sns</S.Or>
              <S.OrRight></S.OrRight>
            </S.Orbox>

            <S.SnsBox>
              <S.KaKao src="/image/kakao.png" />
              <S.Google src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png" />
              <S.Naver src="/image/naver.png" />
            </S.SnsBox>
          </S.Sns>
        </S.WrapperIn>
      </S.WrapperOut>
    </S.Wrapper>
  );
}
