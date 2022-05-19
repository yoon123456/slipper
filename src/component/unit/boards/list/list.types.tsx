export interface IListPresenter {
  onClickDetail: () => void;
  onClickSearch: () => void;
  onChangeKeyword: (value: string) => void; // chan 검색 기능 추가
}
