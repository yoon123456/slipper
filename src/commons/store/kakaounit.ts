import { atom } from "recoil";

//셋팅
export const kakaoAddress = atom({
  key: "kakaoAddress",
  default: {
    content: "",
    address_name: "",
    group_name: "",
    group_code: "",
    category_name: "",
    distance: "",
    id: "",
    phone: "",
    place_url: "",
    road_name: "",
    position: {
      lat: "",
      lng: "",
    },
  },
});

//초기화
export const resetAdress = atom({
  key: "settingAdress",
  default: {
    content: "",
    address_name: "",
    group_name: "",
    group_code: "",
    category_name: "",
    distance: "",
    id: "",
    phone: "",
    place_url: "",
    road_name: "",
    position: {
      lat: "",
      lng: "",
    },
  },
});
