import { atom, selector } from "recoil";
import { number, string } from "yup";
import { getAccessToken } from "../getAccessToken";

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
// 경찬 추가 22.06.01
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
export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    nickname: "",
  },
});
// 경찬 추가 22.06.01
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

// 경찬 추가 22.06.01
export const detailIdState = atom({
  key: "detailIdState",
  default: [""],
});

// 경찬 추가 22.06.01
export const serchBar = atom({
  key: "serch",
  default: "",
});

// 경찬 추가 22.06.01
export const categoryBar = atom({
  key: "category",
  default: "",
});

// 경찬 추가 22.06.01
export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
