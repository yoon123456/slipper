export interface IMyPagePresenter {
  mypageRight: string;
  onClickMyinfo: () => void;
  onClickMyboards: () => void;
  onClickMypicks: () => void;
  onClickMypaids: () => void;
  data: any;
}
export interface IProps {
  mypageRight: boolean;
}
