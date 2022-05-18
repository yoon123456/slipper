import * as S from "./join.styles";
import { IJoinPresenterProps } from "./join.types";

export default function JoinPresenter(props: IJoinPresenterProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickJoin)}>
      <S.Wrapper>
        <S.WrapperLeft>
          <S.ImageBox>
            <S.Image src="/image/check.png" />
          </S.ImageBox>
        </S.WrapperLeft>
        <S.WrapperOut>
          <S.WrapperIn>
            <S.Join>Welcome to slipper!</S.Join>

            <S.Profile>
              <S.ProfileBox>
                <S.InputProfile
                  type="text"
                  placeholder="아이디(이메일)"
                  {...props.register("email")}
                />
                <S.Error>{props.formState.errors.email?.message}</S.Error>
                <S.InputProfile
                  type="text"
                  placeholder="닉네임"
                  {...props.register("nickname")}
                />
                <S.Error>{props.formState.errors.nickname?.message}</S.Error>
              </S.ProfileBox>
              <S.MyImage></S.MyImage>
            </S.Profile>
            <S.PasswordCheck
              type="password"
              placeholder="비밀번호"
              {...props.register("pw")}
            />
            <S.Error>{props.formState.errors.pw?.message}</S.Error>
            <S.PasswordCheck
              type="password"
              placeholder="비밀번호 확인"
              {...props.register("pwCheck")}
            />
            <S.Error>{props.formState.errors.pwCheck?.message}</S.Error>
            <S.Check>
              <S.TelBox>
                <S.Tel
                  type="tel"
                  name="phone"
                  onChange={props.onChangePhoneNum}
                />
              </S.TelBox>
              <S.NumberAsk onClick={props.onClickGetToken}>
                인증번호 요청
              </S.NumberAsk>
            </S.Check>
            <S.CheckNumber>
              <S.Input
                type="text"
                placeholder="인증번호"
                onChange={props.onChangeProofNum}
              />
              <S.CheckEnd onClick={props.onClickCheckProof}>
                인증완료
              </S.CheckEnd>
            </S.CheckNumber>
            <S.Introduce
              type="textarea"
              placeholder="간단한 소개글"
              {...props.register("introduce")}
            />

            <S.JoinSlipper>슬리퍼 신기</S.JoinSlipper>
          </S.WrapperIn>
        </S.WrapperOut>
      </S.Wrapper>
    </form>
  );
}
