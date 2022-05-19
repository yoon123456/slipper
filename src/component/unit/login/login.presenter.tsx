import * as S from "./login.styles";
import { IJoinPresenter } from "./login.types";

export default function JoinPresenter(props: IJoinPresenter) {
  return (
    <form onSubmit={props.handleSubmit(props.onclickLogin)}>
      <S.Wrapper>
        <S.WrapperOut>
          <S.WrapperIn>
            {/* <S.Join>{"Hi, I'm slipper"}</S.Join> */}
            <S.Join>{"Hi"}</S.Join>
            <S.Join>{"i'm slipper"}</S.Join>
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
              <S.JoinSlipper>슬리퍼 신기</S.JoinSlipper>
            </S.JoinWrap>
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
    </form>
  );
}
