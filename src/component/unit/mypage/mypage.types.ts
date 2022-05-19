export interface IMyPagePresenter {
  mypageRight: string;
  onClickMyinfo: () => void;
  onClickMyboards: () => void;
  onClickMypicks: () => void;
  onClickMypaids: () => void;
}
export interface IProps {
  mypageRight: boolean;
}
