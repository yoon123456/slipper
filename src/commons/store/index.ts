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
