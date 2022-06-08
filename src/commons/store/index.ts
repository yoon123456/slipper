import { atom } from "recoil";
import { string } from "yup";

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});

export const isClickedNumState = atom({
  key: "isClickedNumState",
  default: 0,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

// 예원 추가 5.24
export const isLoadedState = atom({
  key: "isLoadedState",
  default: true,
});

export const addressName = atom({
  key: "addressName",
  default: [
    {
      address_name: string,
      category_group_code: string,
      category_group_name: string,
      category_name: string,
      distance: string,
      id: string,
      phone: string,
      place_name: string,
      place_url: string,
      road_address_name: string,
      x: string,
      y: string,
    },
  ],
});

// 예원 추가 22.05.21
export const SearchBarIsActiveState = atom({
  key: "SearchBarIsActiveState",
  default: false,
});

// 예원 추가 22.05.22
export const SearchState = atom({
  key: "SearchState",
  default: "",
});

// 예원 추가 22.05.22
export const CategoryState = atom({
  key: "CategoryState",
  default: "1",
});

// 승현 추가 22.05.24
export const BannerState = atom({
  key: "BannerState",
  default: "",
});

// 예원 추가 22.5.25
export const userNicknameState = atom({
  key: "userNicknameState",
  default: "",
});

export const userLoginInfo = atom({
  key: "userLoginInfo",
  default: {
    email: "",
    nickname: "",
    subStart: "",
    subEnd: "",
    subType: "",
    payment: {
      impUid: "",
    },
  },
});

export const detailIdState = atom({
  key: "detailIdState",
  default: [""],
});

export const serchBar = atom({
  key: "serch",
  default: "",
});

export const categoryBar = atom({
  key: "category",
  default: "",
});
