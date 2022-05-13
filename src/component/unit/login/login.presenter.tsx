import * as S from "./login.styles";

export default function LoginPresenter() {
  return (
    <>
      <S.WrapperOut>
        <S.WrapperIn>
          <S.WrapperPerson>
            <S.WrapperPersonImg src="/image/loginPerson.png" />
          </S.WrapperPerson>
          <S.WrapperInIn>
            <S.lockBox>
              <S.lockimg src="/image/lock.png" />
            </S.lockBox>

            <S.WrapperInInFirst>
              <S.LoginBox>로그인</S.LoginBox>
            </S.WrapperInInFirst>

            <S.WrapperEmailBox>
              <S.EmailBox placeholder="아이디(이메일)"></S.EmailBox>
            </S.WrapperEmailBox>

            <S.WrapperPassowrdBox>
              <S.PasswordBox
                type={"password"}
                placeholder="비밀번호"
              ></S.PasswordBox>
            </S.WrapperPassowrdBox>

            <S.WrapperLoginBtn>
              <S.LoginBtn type="submit">슬리퍼 신기</S.LoginBtn>
            </S.WrapperLoginBtn>

            <S.WrapperCategory>
              <S.CategoryId>아이디찾기</S.CategoryId>
              <S.CategoryPassword>비밀번호찾기</S.CategoryPassword>
              <S.CategorySpace>
                <S.CategoryGo src="/image/Vector.png" />
              </S.CategorySpace>
              <S.CategorySignUp>회원가입</S.CategorySignUp>
            </S.WrapperCategory>
            <S.WrapperSns>
              <S.WrapperLeftSns></S.WrapperLeftSns>
              <S.WrapperleftOrSpace></S.WrapperleftOrSpace>
              <S.WrapperOr>or</S.WrapperOr>
              <S.WrapperRightOrSpace></S.WrapperRightOrSpace>
              <S.WrapperRightSns></S.WrapperRightSns>
            </S.WrapperSns>
            <S.WrapperSnsMenu>
              <S.WrapperSnsKaoKao>
                <S.WrapperSnsKaoKaoImage src="/image/kakao.png"></S.WrapperSnsKaoKaoImage>
              </S.WrapperSnsKaoKao>
              <S.WrapperSnsGoolge>
                <S.WrapperSnsGoogleImage src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png"></S.WrapperSnsGoogleImage>
              </S.WrapperSnsGoolge>
              <S.WrapperSnsNaver>
                <S.WrapperSnsNaverImage src="/image/naver.png"></S.WrapperSnsNaverImage>
              </S.WrapperSnsNaver>
            </S.WrapperSnsMenu>
          </S.WrapperInIn>
        </S.WrapperIn>
      </S.WrapperOut>
    </>
  );
}
