// 예원 작업 비밀번호 변경 5.26

import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationProofTokenArgs,
  IMutationUpdateUserPwArgs,
  IMutationUserGetTokenArgs,
} from "../../../../commons/types/generated/types";
import FindPwPresenter from "./findPw.presenter";
import { PROOF_TOKEN, UPDATE_USER_PW, USER_GET_TOKEN } from "./findPw.querys";

export default function FindPwContainer() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [proofNum, setProofNum] = useState("");
  const [flag, setFlag] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  // graphql 부분
  const [updateUserPw] = useMutation<
    Pick<IMutation, "updateUserPw">,
    IMutationUpdateUserPwArgs
  >(UPDATE_USER_PW);

  const [userGetToken] = useMutation<
    Pick<IMutation, "userGetToken">,
    IMutationUserGetTokenArgs
  >(USER_GET_TOKEN);

  const [proofToken] = useMutation<
    Pick<IMutation, "proofToken">,
    IMutationProofTokenArgs
  >(PROOF_TOKEN);

  // 예원 이메일입력 함수
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  // 예원 비밀번호입력 함수
  const onChangePw = (event: ChangeEvent<HTMLInputElement>) => {
    setPw(event.target.value);
  };
  // 예원 비밀번호 확인 함수
  const onChangePwCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setPw(event.target.value);
    setIsActive(false);
  };

  // 예원 핸드폰번호입력 함수
  const onChangePhoneNum = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNum(event.target.value);
    if (event.target.value.length === 11) {
      setIsActive(false);
    }
  };

  // 예원 인증번호입력 함수
  const onChangeProofNum = (event: ChangeEvent<HTMLInputElement>) => {
    setProofNum(event.target.value);
  };

  // 예원 인증번호 요청 기능
  const onClickGetToken = async () => {
    try {
      await userGetToken({
        variables: {
          phone: phoneNum,
        },
      });
      Modal.success({ content: "인증번호를 전송하였습니다" });
    } catch (error) {
      Modal.error({ content: "인증번호 전송에 실패하였습니다" });
    }
    setFlag(true);
  };

  // 예원 인증완료 요청 기능
  const onClickCheckProof = async () => {
    if (proofNum === "") {
      Modal.error({ content: "인증번호를 입력해주세요" });
      return;
    }
    try {
      await proofToken({
        variables: {
          phone: phoneNum,
          mytoken: proofNum,
        },
      });
      Modal.success({ content: "인증이 완료되었습니다" });
      setFlag(false);
      setIsEdit(true);
    } catch (error) {
      Modal.error({ content: "인증에 실패하였습니다" });
    }
  };

  // 비번 찾기 버튼
  const onClickFindPw = async () => {
    if (email && phoneNum) {
      try {
        const result = await updateUserPw({
          variables: {
            email: email,
            pw: pw,
          },
        });
        Modal.success({ content: "비밀번호 변경에 성공하였습니다!" });
        router.push("/login");
      } catch (error) {
        Modal.error({ content: "오류발생!" });
      }
    }
  };

  return (
    <FindPwPresenter
      onChangeEmail={onChangeEmail}
      onChangePw={onChangePw}
      onChangePwCheck={onChangePwCheck}
      onChangePhoneNum={onChangePhoneNum}
      onChangeProofNum={onChangeProofNum}
      onClickGetToken={onClickGetToken}
      onClickCheckProof={onClickCheckProof}
      onClickFindPw={onClickFindPw}
      isActive={isActive}
      isEdit={isEdit}
      flag={flag}
      email={email}
    />
  );
}
