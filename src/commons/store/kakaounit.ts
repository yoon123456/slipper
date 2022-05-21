import { atom } from "recoil";
import { string } from "yup";

export const kakaoAddress = atom({
  key: "kakaoAddress",
  default: [
    {
      address_name: string,
      group_name: string,
      group_code: string,
      category_name: string,
      distance: string,
      id: string,
      phone: string,
      place_url: string,
      road_name: string,
      x: string,
      y: string,
    },
  ],
});
