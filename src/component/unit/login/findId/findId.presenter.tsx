import { useMovetoPage } from "../../../../commons/hooks/movePage";
import Number from "../../../../commons/timer";
import * as S from "./findId.styles";
import { IFindIdPresenter } from "./findId.types";

export default function FindIdPresenter(props: IFindIdPresenter) {
  const { onClickMoveToPage } = useMovetoPage();

  return (
    <S.Wrapper>
      <S.WrapperOut>
        <S.WrapperIn>
          <S.Join>아이디(이메일 찾기)</S.Join>
          <S.Profile>
            <S.ProfileBox>
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
          <S.Eamil>{props.email}</S.Eamil>
          <S.JoinWrap>
            {props.email ? (
              <S.JoinSlipper
                onClick={onClickMoveToPage("/login")}
                isActive={props.isActive}
              >
                로그인하러가기
              </S.JoinSlipper>
            ) : (
              <S.JoinSlipper
                onClick={props.onClickFindId}
                isActive={props.isActive}
              >
                찾기
              </S.JoinSlipper>
            )}
          </S.JoinWrap>
        </S.WrapperIn>
      </S.WrapperOut>
    </S.Wrapper>
  );
}
