import { MouseEvent } from "react";

export interface IListPresenter {
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onChangeKeyword: (value: string) => void; //chan 검색 기능 추가 22.05.19
  keyword: string; //chan 검색 keyword 추가 22.05.19
  data: any; //예원
  refetch: any; //예원
  onLoadMore: () => void; //예원
  btnRef: any;
}

export interface Iprops {
  isActive: boolean;
}
