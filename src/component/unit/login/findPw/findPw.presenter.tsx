import Number from "../../../../commons/timer";
import * as S from "./findPw.styles";
import { IFindPwPresenter } from "./findPw.types";

export default function FindPwPresenter(props: IFindPwPresenter) {
  return (
    <S.Wrapper>
      <S.WrapperOut>
        <S.WrapperIn>
          <S.Join>비밀번호 변경</S.Join>
          {!props.isEdit && (
            <S.Profile>
              <S.ProfileBox>
                <S.InputProfileEmail
                  type="text"
                  placeholder={"이메일을 입력해주세요."}
                  onChange={props.onChangeEmail}
                />
                <S.NumWrap>
                  <S.InputProfile
                    type="text"
                    placeholder={"'-'를 제외하고 휴대폰 번호를 입력해주세요."}
                    onChange={props.onChangePhoneNum}
                  />
                  <S.NumberAsk
                    onClick={props.onClickGetToken}
                    disabled={props.isActive}
                  >
                    인증번호 요청
                  </S.NumberAsk>
                </S.NumWrap>
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
              </S.ProfileBox>

              <S.Flex>
                <S.NumberBox>
                  <Number flag={props.flag} />
                </S.NumberBox>
              </S.Flex>
            </S.Profile>
          )}
          {props.isEdit && (
            <S.PwWrap>
              <S.InputProfilePw
                type="password"
                placeholder={"비밀번호를 입력해주세요."}
                onChange={props.onChangePw}
              />
              <S.InputProfilePw
                type="password"
                placeholder={"비밀번호를 다시 입력해주세요."}
                onChange={props.onChangePwCheck}
              />

              <S.JoinSlipper
                onClick={props.onClickFindPw}
                isActive={props.isActive}
              >
                비밀번호 변경
              </S.JoinSlipper>
            </S.PwWrap>
          )}
        </S.WrapperIn>
      </S.WrapperOut>
    </S.Wrapper>
  );
}
