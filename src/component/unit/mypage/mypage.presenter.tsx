// haeri 작업시작 22.05.13
import * as S from "./mypage.styles";
import { IMyPagePresenter } from "./mypage.types";
import MypicksContainer from "../mypicks/mypicks.container";
import MyBoardsContainer from "../myboards/myboards.container";
import MypaidsContainer from "../mypaids/mypaids.container";
import { Modal } from "antd";
import ImageProfile from "../../../commons/imageProfile";

export default function MyPagePresenter(props: IMyPagePresenter) {
  return (
    <S.WrapperOut>
      <S.WrapperLeft>
        <S.LeftTop>
          {/* 닉네임 */}
          <S.NicknameRow>
            <S.Nickname>{props.data?.fetchUser.nickname}</S.Nickname>
            <S.NicknameFixed>님</S.NicknameFixed>
            <S.EditIcon src="/image/mypageEdit.png" onClick={props.showModal} />
          </S.NicknameRow>
          {/* 프로필이미지 */}
          <S.ProfileImage
            src={
              props.data?.fetchUser.imageUrl
                ? props.data?.fetchUser.imageUrl
                : "/image/profileDefault.png"
            }
          />
          {/* 자기소개 */}
          {props.data?.fetchUser.introduce === "" ? (
            <S.Introduce>자기소개를 적어주세요.</S.Introduce>
          ) : (
            <S.Introduce>{props.data?.fetchUser.introduce}</S.Introduce>
          )}
          {/* 수정 모달 */}
          <Modal
            title="개인정보 수정"
            visible={props.modalVisible}
            onCancel={props.modalCancel}
            onOk={props.modalOk}
          >
            <S.ModalHead>닉네임 수정</S.ModalHead>
            <S.NicknameEditInput
              type="text"
              onChange={props.onChangeNickname}
              defaultValue={props.data?.fetchUser.nickname}
            />
            <S.ProfileImageEditWrapper>
              <S.ModalHead>프로필 이미지 수정</S.ModalHead>
              <ImageProfile
                onChangeFileUrl={props.onChangeFileUrl}
                fileUrl={props.fileUrl}
                userImage={props.data?.fetchUser.imageUrl}
              />
            </S.ProfileImageEditWrapper>
            <S.ModalHead>자기소개글 수정</S.ModalHead>
            <S.IntroduceEditInput
              type="text"
              defaultValue={
                props.data?.fetchUser.introduce
                  ? props.data?.fetchUser.introduce
                  : ""
              }
              onChange={props.onChangeIntroduce}
            />
          </Modal>
        </S.LeftTop>
        {/* 메뉴버튼 */}
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
      {/* 우측 본문 */}
      <S.WrapperRight>
        <S.Right>
          {props.mypageRight === "mypicks" && <MypicksContainer />}
          {props.mypageRight === "myboards" && <MyBoardsContainer />}
          {props.mypageRight === "mypaids" && <MypaidsContainer />}
        </S.Right>
      </S.WrapperRight>
    </S.WrapperOut>
  );
}
