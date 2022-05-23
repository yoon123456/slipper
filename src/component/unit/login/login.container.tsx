import { useRouter } from "next/router";
import LoginPresenter from "./login.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { FETCH_USER, LOGIN } from "./login.queries";
import { IFormValues } from "./login.types";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

const schema = yup.object({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
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
});

export default function LoginContainer() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [login] = useMutation(LOGIN);

  const onclickLogin = async (data: IFormValues) => {
    if (data.email && data.pw) {
      try {
        const result = await login({
          variables: {
            email: data.email,
            pw: data.pw,
          },
        });
        // const accessToken = result.data?.login.accessToken;

        // const resultUserInfo = await client.query({
        //   query: FETCH_USER,
        //   context: {
        //     headers: {
        //       Authorization: `Bearer ${accessToken}`,
        //     },
        //   },
        // });

        Modal.success({ content: "슬리퍼 장착 성공" });
        router.push("/boards");
        console.log("login", result.data.login);
      } catch (error) {
        Modal.error({ content: "슬리퍼 장착 실패" });
      }
    }
  };

  return (
    <LoginPresenter
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onclickLogin={onclickLogin}
    />
  );
}
