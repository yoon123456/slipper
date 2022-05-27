import { useRouter } from "next/router";
import JoinPresenter from "./join.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_USER, GET_TOKEN, PROOF_TOKEN } from "./join.queries";
import { ChangeEvent, useState } from "react";
import { IFormValues } from "./join.types";
import { Modal } from "antd";
import {
  IMutation,
  IMutationCreateUserArgs,
  IMutationGetTokenArgs,
  IMutationProofTokenArgs,
} from "../../../commons/types/generated/types";

const schema = yup.object({
  email: yup
    .string()
    .matches(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
      "이메일 형식이 적합하지 않습니다"
    )
    .required("이메일은 필수입력사항 입니다"),

  pw: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리~16자리 여야합니다."
    )
    .required("비밀번호는 필수 입력 사항입니다"),

  pwCheck: yup
    .string()
    .oneOf([yup.ref("pw"), null], "비밀번호가 일치하지 않습니다")
    .required("비밀번호를 확인해주세요."),

  nickname: yup
    .string()
    .max(8, "닉네임은 8자 이내입니다")
    .required("닉네임은 필수입력사항 입니다"),
});

export default function JoinContainer() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<IFormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [phoneNum, setPhoneNum] = useState("");
  const [proofNum, setProofNum] = useState("");
  const [fileUrl, setFileUrl] = useState([""]);
  const [businessfileUrl, setBusinessFileUrl] = useState([""]);

  const [flag, setFlag] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [isActived, setIsActived] = useState(true);

  const [role, setRole] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isShow, setIsShow] = useState(true);

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  const [getToken] = useMutation<
    Pick<IMutation, "getToken">,
    IMutationGetTokenArgs
  >(GET_TOKEN);
  const [proofToken] = useMutation<
    Pick<IMutation, "proofToken">,
    IMutationProofTokenArgs
  >(PROOF_TOKEN);

  const onChangePhoneNum = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNum(event.target.value);
    if (event.target.value.length === 11) {
      setIsActive(false);
    }
  };
  const onChangeProofNum = (event: ChangeEvent<HTMLInputElement>) => {
    setProofNum(event.target.value);
    console.log(proofNum);
  };

  const onChangeFileUrl = (fileUrl: string) => {
    const newFileUrl = [fileUrl];
    setFileUrl(newFileUrl);
  };
  const onChangeBusinessFileUrl = (fileUrl: string) => {
    const newBusinessFileUrl = [fileUrl];
    setBusinessFileUrl(newBusinessFileUrl);
  };

  const onClickGetToken = async () => {
    try {
      await getToken({
        variables: {
          phone: phoneNum,
        },
      });
      alert("인증번호가 전송되었습니다");
    } catch (error) {
      alert(error);
    }
    setFlag(true);
  };

  const onClickCheckProof = async () => {
    if (proofNum === "") {
      alert("안돼");
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
    } catch (error) {
      Modal.error({ content: "인증에 실패하였습니다" });
    }
  };

  const onClickJoin = async (data: IFormValues) => {
    if (data.email && data.pw && data.nickname) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              email: data.email,
              pw: data.pw,
              nickname: data.nickname,
              phone: String(phoneNum),
              imageUrl: String(fileUrl),
              businessImageUrl: String(businessfileUrl),
              introduce: data.introduce,
            },
          },
        });
        Modal.success({ content: "슬리퍼 획득" });
        router.push(`/settimeout`);
      } catch (error) {
        Modal.error({ content: "슬리퍼 획득 실패" });
      }
    }
  };

  const onClickAgreeJoin = () => {
    setIsEdit(true);
  };
  const onClickRadio = () => {
    setIsActived((isActived) => !isActived);
  };
  const onClickRole = (event: ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
    setIsShow(false);
  };
  const onClickCancle = () => {
    router.push("/");
  };
  return (
    <>
      <JoinPresenter
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        onClickJoin={onClickJoin}
        onChangePhoneNum={onChangePhoneNum}
        onChangeProofNum={onChangeProofNum}
        onClickGetToken={onClickGetToken}
        onClickCheckProof={onClickCheckProof}
        phoneNum={phoneNum}
        flag={flag}
        isActive={isActive}
        isActived={isActived}
        isShow={isShow}
        onChangeFileUrl={onChangeFileUrl}
        onChangeBusinessFileUrl={onChangeBusinessFileUrl}
        fileUrl={fileUrl}
        businessfileUrl={businessfileUrl}
        onClickAgreeJoin={onClickAgreeJoin}
        isEdit={isEdit}
        onClickRadio={onClickRadio}
        onClickRole={onClickRole}
        onClickCancle={onClickCancle}
      />
    </>
  );
}
