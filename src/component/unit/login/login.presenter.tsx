import { useMovetoPage } from "../../../commons/hooks/movePage";
import * as S from "./login.styles";
import { IJoinPresenter } from "./login.types";

export default function JoinPresenter(props: IJoinPresenter) {
  const { onClickMoveToPage } = useMovetoPage();

  return (
    <form onSubmit={props.handleSubmit(props.onclickLogin)}>
      <S.Wrapper>
        <S.WrapperOut>
          <S.WrapperIn>
            <S.Join>{"Hi"}</S.Join>
            <S.Join>{"I'm Slipper"}</S.Join>
            <S.Profile>
              <S.ProfileBox>
                <S.InputProfile
                  type="text"
                  placeholder="아이디(이메일)"
                  {...props.register("email")}
                />
                <S.Error>{props.formState.errors.email?.message}</S.Error>
                <S.PasswordCheck
                  type="password"
                  placeholder="비밀번호"
                  {...props.register("pw")}
                />
                <S.Error>{props.formState.errors.pw?.message}</S.Error>
              </S.ProfileBox>
            </S.Profile>
            <S.JoinWrap>
              <S.JoinSlipper isActive={props.formState.isValid}>
                로그인
              </S.JoinSlipper>
            </S.JoinWrap>
            <S.Menu>
              <S.MenuBox>
                <S.IdFind onClick={onClickMoveToPage("login/findId")}>
                  아이디 찾기
                </S.IdFind>
                <div>|</div>
                <S.PasswordFind onClick={onClickMoveToPage("login/findPw")}>
                  비밀번호 찾기
                </S.PasswordFind>
                <div>|</div>
                <S.Sign onClick={onClickMoveToPage("join")}>회원가입</S.Sign>
              </S.MenuBox>
            </S.Menu>

            <S.Sns>
              <S.Orbox>
                <S.OrLeft></S.OrLeft>
                <S.Or>소셜로그인</S.Or>
                <S.OrRight></S.OrRight>
              </S.Orbox>
              <S.SnsBox>
                <S.AWrap href="https://backend.slipperofficial.shop/login/kakao">
                  <S.KaKao src="https://upload.wikimedia.org/wikipedia/commons/e/e3/KakaoTalk_logo.svg" />
                </S.AWrap>
                <S.AWrap href="https://backend.slipperofficial.shop/login/google">
                  <S.Google src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png" />
                </S.AWrap>
                <S.AWrap href="https://backend.slipperofficial.shop/login/naver">
                  <S.Naver src="/image/naver.png" />
                </S.AWrap>
              </S.SnsBox>
            </S.Sns>
          </S.WrapperIn>
        </S.WrapperOut>
      </S.Wrapper>
    </form>
  );
}
