import { useRouter } from "next/router";
import JoinPresenter from "./join.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_USER, GET_TOKEN, PROOF_TOKEN } from "./join.queries";
import { ChangeEvent, useState } from "react";
import { IFromValues } from "./join.types";
import { Modal } from "antd";
import QuestionListPresenter from "../question/list/questionlist.presenter";
import QuestionListUIItem from "../question/list/questiontlist.presenteritem";

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
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [phoneNum, setPhoneNum] = useState("");
  const [proofNum, setProofNum] = useState("");
  const [flag, setFlag] = useState(false);
  const [fileUrl, setFileUrl] = useState([""]);

  const [isActive, setIsActive] = useState(true);
  const [isActived, setIsActived] = useState(true);
  const [role, setRole] = useState("");

  const [createUser] = useMutation(CREATE_USER);
  const [getToken] = useMutation(GET_TOKEN);
  const [proofToken] = useMutation(PROOF_TOKEN);

  const [isEdit, setIsEdit] = useState(false);

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
    } catch (error) {
      Modal.error({ content: "인증에 실패하였습니다" });
    }
  };

  const onClickJoin = async (data: IFromValues) => {
    if (data.email && data.pw && data.nickname) {
      // data 이름 바꾸기
      console.log(data);
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              email: data.email,
              pw: data.pw,
              nickname: data.nickname,
              phone: String(phoneNum),
              imageUrl: String(fileUrl),
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
    setIsActived(false);
  };
  const onClickRole = (event: ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };
  const onClickCancle = () => {
    router.push("/");
  };
  console.log(role);
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
        onChangeFileUrl={onChangeFileUrl}
        fileUrl={fileUrl}
        onClickAgreeJoin={onClickAgreeJoin}
        isEdit={isEdit}
        onClickRadio={onClickRadio}
        onClickRole={onClickRole}
        onClickCancle={onClickCancle}
      />
    </>
  );
}
