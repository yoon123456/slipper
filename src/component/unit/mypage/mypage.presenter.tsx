// 해리 작업 5/13
import * as S from "./mypage.styles";
import { IMyPagePresenter } from "./mypage.types";
// import MyinformationContainer from "../myinformation/myinformation.container";
import MypicksContainer from "../mypicks/mypicks.container";
import MyBoardsContainer from "../myboards/myboards.container";
import MypaidsContainer from "../mypaids/mypaids.container";

export default function MyPagePresenter(props: IMyPagePresenter) {
  // console.log(props.hamMypageRight);
  return (
    // <S.Wrapper>
    <S.WrapperOut>
      <S.WrapperLeft>
        <S.NicknameWrapper>
          {props.openNicknameEdit ? (
            <S.NicknameInput
              type="text"
              defaultValue={props.data?.fetchUser.nickname}
              onChange={props.onChangeNickname}
            />
          ) : (
            <S.Nickname>{props.data?.fetchUser.nickname}</S.Nickname>
          )}
          <S.NicknameFixed>님</S.NicknameFixed>
          {props.openNicknameEdit ? (
            <S.FinishNicknameEdit onClick={props.updateNickname}>
              수정완료
            </S.FinishNicknameEdit>
          ) : (
            <S.OpenNicknameEdit
              src="/image/mypageEdit.png"
              onClick={props.onClickOpenNicknameEdit}
            />
          )}
        </S.NicknameWrapper>
        <S.ProfileImage src={props.data?.fetchUser.imageUrl} />
        <S.Introduce>{props.data?.fetchUser.introduce}</S.Introduce>
        <S.MenuWrapper
          onClick={props.onClickMypicks}
          mypageRight={props.mypageRight === "mypicks"}
        >
          <S.Icon src="/image/mypicksColored.png"></S.Icon>
          <S.MenuButton>찜한 글</S.MenuButton>
        </S.MenuWrapper>
        <S.MenuWrapper
          onClick={props.onClickMyboards}
          mypageRight={props.mypageRight === "myboards"}
        >
          <S.Icon src="/image/myboardsColored.png"></S.Icon>
          <S.MenuButton>내가 쓴 글</S.MenuButton>
        </S.MenuWrapper>
        <S.MenuWrapper
          onClick={props.onClickMypaids}
          mypageRight={props.mypageRight === "mypaids"}
        >
          <S.Icon src="/image/mypaidsColored.png"></S.Icon>
          <S.MenuButton>결제내역</S.MenuButton>
        </S.MenuWrapper>
      </S.WrapperLeft>
      <S.WrapperRight>
        <S.Right>
          {/* {props.mypageRight === "myinformation" && <MyinformationContainer />} */}
          {props.mypageRight === "mypicks" && <MypicksContainer />}
          {props.mypageRight === "myboards" && <MyBoardsContainer />}
          {props.mypageRight === "mypaids" && <MypaidsContainer />}
        </S.Right>
      </S.WrapperRight>
    </S.WrapperOut>
    // </S.Wrapper>
  );
}
