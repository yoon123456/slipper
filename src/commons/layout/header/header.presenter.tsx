import * as S from "./header.styles";
import Ham from "../../ham";
import Logo from "../../logo";
import { HeaderPrpos } from "./header.types";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../store";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

export default function HeaderPresenter(props: HeaderPrpos) {
  const [accessToken] = useRecoilState(accessTokenState);
  const [logout] = useMutation(LOGOUT);
  const router = useRouter();
  const onClick = async () => {
    try {
      await logout();
      alert("성공");
      location.reload();
      router.push("/boards");
    } catch (error) {
      alert("메롱");
    }
  };
  return (
    <>
      <S.WrapperOut>
        <S.WrapperInLogo onClick={props.onClickMoveToPage("/boards")}>
          <Logo />
        </S.WrapperInLogo>
        <button onClick={onClick}>로그아웃</button>
        <S.WrapperIn>
          {accessToken ? (
            <S.WrapUser>
              <S.WrapperInUser>
                {props.data?.fetchUser.nickname}
              </S.WrapperInUser>
              <S.WrapperInMy>님 안녕하세요</S.WrapperInMy>
            </S.WrapUser>
          ) : (
            <div></div>
          )}

          {/* <S.WrapperInHam>햄버거</S.WrapperInHam> */}
          <Ham />
        </S.WrapperIn>
      </S.WrapperOut>
    </>
  );
}
