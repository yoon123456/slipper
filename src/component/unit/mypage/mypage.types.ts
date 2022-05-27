export interface IMyPagePresenter {
  mypageRight: string;
  onClickMypicks: () => void;
  onClickMyboards: () => void;
  onClickMypaids: () => void;
  data: any;
  // 닉네임
  showNicknameModal: () => void;
  nicknameModalVisible: boolean;
  nicknameModalCancel: () => void;
  onChangeNickname: (event: any) => void;
  nicknameModalOk: () => void;
  // 프로필이미지
  showProfileImgModal: () => void;
  profileImgModalVisible: boolean;
  profileImgModalCancel: () => void;
  onChangeFileUrl: () => {};
  fileUrl: string[];
  profileImgModalOk: () => void;
  // 자기소개
  showIntroduceModal: () => void;
  introduceModalVisible: boolean;
  introduceModalCancel: () => void;
  onChangeIntroduce: (event: any) => void;
  introduceModalOk: () => void;
}

export interface IProps {
  mypageRight: boolean;
}
