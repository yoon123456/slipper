// 해리 작업 5/13
import * as S from "./mypage.styles";
import { IMyPagePresenter } from "./mypage.types";
import MypicksContainer from "../mypicks/mypicks.container";
import MyBoardsContainer from "../myboards/myboards.container";
import MypaidsContainer from "../mypaids/mypaids.container";

// import React, { useState } from "react";
import { Modal } from "antd";
import ImageProfile from "../../../commons/imageProfile";

export default function MyPagePresenter(props: IMyPagePresenter) {
  return (
    <S.WrapperOut>
      <S.WrapperLeft>
        {/* 닉네임 fetch & update */}
        <S.NicknameWrapper>
          <S.Nickname onClick={props.showNicknameModal}>
            {props.data?.fetchUser.nickname}
          </S.Nickname>
          <S.NicknameFixed>님</S.NicknameFixed>
        </S.NicknameWrapper>
        <Modal
          title="닉네임 수정"
          visible={props.nicknameModalVisible}
          onCancel={props.nicknameModalCancel}
          onOk={props.nicknameModalOk}
        >
          <S.NicknameEditInput
            type="text"
            defaultValue={props.data?.fetchUser.nickname}
            onChange={props.onChangeNickname}
          />
        </Modal>
        {/* 프로필사진 fetch & update */}
        {props.data?.fetchUser.imageUrl === "" ? (
          <S.ProfileImage
            src="/image/profileDefault.png"
            onClick={props.showProfileImgModal}
          />
        ) : (
          <S.ProfileImage
            src={props.data?.fetchUser.imageUrl}
            onClick={props.showProfileImgModal}
          />
        )}
        <Modal
          title="프로필사진 수정"
          visible={props.profileImgModalVisible}
          onCancel={props.profileImgModalCancel}
          onOk={props.profileImgModalOk}
        >
          <ImageProfile
            onChangeFileUrl={props.onChangeFileUrl}
            fileUrl={props.fileUrl}
          />
        </Modal>
        {/* 소개글 fetch & update */}
        {props.data?.fetchUser.introduce === "" ? (
          <S.Introduce onClick={props.showIntroduceModal}>
            자기소개를 입력해주세요.
          </S.Introduce>
        ) : (
          <S.Introduce onClick={props.showIntroduceModal}>
            {props.data?.fetchUser.introduce}
          </S.Introduce>
        )}
        <Modal
          title="본인소개 수정"
          visible={props.introduceModalVisible}
          onCancel={props.introduceModalCancel}
          onOk={props.introduceModalOk}
        >
          <S.IntroduceEditInput
            type="text"
            defaultValue={props.data?.fetchUser.introduce}
            onChange={props.onChangeIntroduce}
          />
        </Modal>
        {/* 좌측 메뉴버튼 */}
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
      {/* 우측 */}
      <S.WrapperRight>
        <S.Right>
          {/* {props.mypageRight === "myinformation" && <MyinformationContainer />} */}
          {props.mypageRight === "mypicks" && <MypicksContainer />}
          {props.mypageRight === "myboards" && <MyBoardsContainer />}
          {props.mypageRight === "mypaids" && <MypaidsContainer />}
        </S.Right>
      </S.WrapperRight>
    </S.WrapperOut>
  );
}
