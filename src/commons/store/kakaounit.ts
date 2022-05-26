import { atom } from "recoil";
import { string } from "yup";

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
