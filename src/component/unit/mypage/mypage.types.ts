export interface IMyPagePresenter {
  data: any;
  mypageRight: string;
  // onClickMyinfo: () => void;
  onClickMypicks: () => void;
  onClickMyboards: () => void;
  onClickMypaids: () => void;
  onClickOpenNicknameEdit: () => void;
  openNicknameEdit: boolean;
  onChangeNickname: (event: any) => void;
  updateNickname: () => void;
}

export interface IProps {
  mypageRight: boolean;
}
