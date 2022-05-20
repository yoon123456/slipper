export interface IListPresenter {
  onClickDetail: () => void;
  onChangeKeyword: (value: string) => void; //chan 검색 기능 추가 22.05.19
  keyword: string; //chan 검색 keyword 추가 22.05.19
}
