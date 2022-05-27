import ImageBoss from "../../../commons/imageBoss";
import ImageProfile from "../../../commons/imageProfile";
import Number from "../../../commons/timer";
import AgreeContent from "./join.agreecontent";
import AgreeLaw from "./join.agreelaw";
import * as S from "./join.styles";
import { IJoinPresenterProps } from "./join.types";

export default function JoinPresenter(props: IJoinPresenterProps) {
  return (
    <S.Wrapper>
      <S.WrapperLeft>
        <S.ImageBox>
          {!props.isShow && (
            <S.BossText>사장님은 사업자등록증을 업로드해주세요!</S.BossText>
          )}
          <ImageBoss
            isShow={props.isShow}
            onChangeBusinessFileUrl={props.onChangeBusinessFileUrl}
            businessfileUrl={props.businessfileUrl}
          />
        </S.ImageBox>
      </S.WrapperLeft>
      <S.WrapperOut>
        {/* 회원가입 */}
        {props.isEdit && (
          <S.WrapperJoin>
            <S.Join>Welcome to slipper!</S.Join>
            <form onSubmit={props.handleSubmit(props.onClickJoin)}>
              <S.RoleBox>
                <S.RoleBoxIn>
                  <S.Role type="radio" name="gender" />
                  유저
                </S.RoleBoxIn>
                <S.RoleBoxIn>
                  <S.Role
                    type="radio"
                    name="gender"
                    value="BUSINESS"
                    onChange={props.onClickRole}
                  />
                  사업자
                </S.RoleBoxIn>
              </S.RoleBox>
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
              <S.PasswordCheck2
                type="password"
                placeholder="비밀번호를 확인하세요."
                {...props.register("pwCheck")}
              />
              <S.Error>{props.formState.errors.pwCheck?.message}</S.Error>

              <S.Check>
                <S.TelBox>
                  <S.Tel
                    type="text"
                    name="phone"
                    onChange={props.onChangePhoneNum}
                    placeholder={"'-'를 제외하고 휴대폰 번호를 입력해주세요."}
                  />
                </S.TelBox>
                <S.NumberAsk
                  onClick={props.onClickGetToken}
                  disabled={props.isActive}
                  type="button"
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
                <S.CheckEnd type="button" onClick={props.onClickCheckProof}>
                  인증완료
                </S.CheckEnd>
              </S.CheckNumber>
              <S.Introduce
                type="textarea"
                placeholder="간단한 소개글"
                {...props.register("introduce")}
              />
              <S.JoinSlipper>슬리퍼 신기</S.JoinSlipper>
            </form>
          </S.WrapperJoin>
        )}

        {/* 약관동의 */}
        {!props.isEdit && (
          <S.WrapperAgree>
            <S.AgreeIn>
              <S.Title>약관 동의</S.Title>
              <S.MustBox>
                <S.Must>이용약관 동의</S.Must>
                <S.MustRed> (필수) </S.MustRed>
              </S.MustBox>
              <S.AgreeContent>
                <AgreeLaw />
              </S.AgreeContent>
              <S.MustBox>
                <S.Must>개인정보 수집 및 이용 동의</S.Must>
                <S.MustRed> (필수) </S.MustRed>
              </S.MustBox>
              <S.AgreeContent>
                <AgreeContent />
              </S.AgreeContent>
              <S.Flex>
                <S.FlexText>회원가입 약관에 모두 동의합니다</S.FlexText>
                <S.TitleText type="checkbox" onClick={props.onClickRadio} />
              </S.Flex>
              <S.AgreeButton>
                <S.AgreeCancle onClick={props.onClickCancle}>
                  CANCLE
                </S.AgreeCancle>
                <S.AgreeJoin
                  onClick={props.onClickAgreeJoin}
                  disabled={props.isActived}
                >
                  JOIN
                </S.AgreeJoin>
              </S.AgreeButton>
            </S.AgreeIn>
          </S.WrapperAgree>
        )}
      </S.WrapperOut>
    </S.Wrapper>
  );
}
