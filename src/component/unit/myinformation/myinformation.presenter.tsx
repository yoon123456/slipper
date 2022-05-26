// 해리 작업 5/15
import * as S from "./myinformation.styles";
import ImageProfile from "../../../commons/imageProfile";
import { IMyinformationPresenter } from "./myinformation.types";

export default function MyinformationPresenter(props: IMyinformationPresenter) {
  return (
    <>
      {props.editUser ? (
        <form onSubmit={props.handleSubmit(props.onClickUpdateUser)}>
          <S.WrapperRight>
            <S.Body>
              {/* <S.ImgEditWrapper>
                <S.Header>프로필 이미지</S.Header>
                <ImageProfile
                  onChangeFileUrl={props.onChangeFileUrl}
                  fileUrl={props.fileUrl}
                  // defaultValue={props.data?.fetchUser.imageUrl}
                />
              </S.ImgEditWrapper> */}
              <S.BodyRow>
                <S.Header>닉네임</S.Header>
                <S.ContentsEdit
                  // placeholder="닉네임을 입력해주세요."
                  defaultValue={props.data?.fetchUser.nickname}
                  {...props.register("nickname")}
                />
              </S.BodyRow>
              <S.BodyRow>
                <S.Header>자기소개글</S.Header>
                <S.IntroductionEdit
                  // placeholder="소개글을 입력해주세요."
                  defaultValue={props.data?.fetchUser.introduce}
                  {...props.register("introduce")}
                />
              </S.BodyRow>
            </S.Body>
            <S.ButtonWrapper>
              <S.Button>수정완료</S.Button>
            </S.ButtonWrapper>
          </S.WrapperRight>
        </form>
      ) : (
        <S.WrapperRight>
          <S.Body>
            <S.BodyRow>
              <S.Header>닉네임</S.Header>
              <S.Contents>{props.data?.fetchUser.nickname}</S.Contents>
            </S.BodyRow>
            <S.BodyRow>
              <S.Header>이메일</S.Header>
              <S.Contents>{props.data?.fetchUser.email}</S.Contents>
            </S.BodyRow>
            <S.BodyRow>
              <S.Header>자기소개글</S.Header>
              <S.Introduction>{props.data?.fetchUser.introduce}</S.Introduction>
            </S.BodyRow>
          </S.Body>
          <S.ButtonWrapper>
            <S.Button onClick={props.onClickMoveToUpdate}>수정</S.Button>
          </S.ButtonWrapper>
        </S.WrapperRight>
      )}
    </>
  );
}
