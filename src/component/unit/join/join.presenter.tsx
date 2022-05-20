import ImageProfile from "../../../commons/imageProfile";
import Number from "../../../commons/timer";
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
                  placeholder="닉네임은 8자 이내로 입력해주세요."
                  {...props.register("nickname")}
                />
                <S.Error>{props.formState.errors.nickname?.message}</S.Error>
              </S.ProfileBox>
              <ImageProfile
                onChangeFileUrl={props.onChangeFileUrl}
                fileUrl={props.fileUrl}
              />
            </S.Profile>
            <S.PasswordCheck
              type="password"
              placeholder="비밀번호는 영문,숫자,특수문자를 포함한 8자리~16자리입니다."
              {...props.register("pw")}
            />
            <S.Error>{props.formState.errors.pw?.message}</S.Error>
            <S.PasswordCheck
              type="password"
              placeholder="비밀번호를 확인하세요."
              {...props.register("pwCheck")}
            />
            <S.Error>{props.formState.errors.pwCheck?.message}</S.Error>
            <S.Check>
              <S.TelBox>
                <S.Tel
                  type="number"
                  name="phone"
                  onChange={props.onChangePhoneNum}
                  placeholder={"'-'를 제외하고 휴대폰 번호를 입력해주세요."}
                />
              </S.TelBox>
              <S.NumberAsk
                onClick={props.onClickGetToken}
                disabled={props.isActive}
              >
                인증번호 요청
              </S.NumberAsk>
              <S.NumberBox>
                <Number flag={props.flag} />
              </S.NumberBox>
            </S.Check>
            <S.CheckNumber>
              <S.Input
                type="text"
                placeholder="인증번호 6자리"
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
