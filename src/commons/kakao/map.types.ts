// import { ChangeEvent } from "react";
// import {
//   FieldValues,
//   FormState,
//   UseFormGetValues,
//   UseFormHandleSubmit,
// } from "react-hook-form";
import { IQuery } from "../types/generated/types";

export interface KaoKaoMap {
  lat: any;
  lng: any;
  isActive: boolean;
  isRoadview: boolean;
  onClickTrrapic: () => void;
  onClickRoadView: () => void;
  onErrorGetNearestPanoId?: (target: kakao.maps.Roadview) => void;
  onPositionChanged?: (target: kakao.maps.Roadview) => void;
  onclickGeoLocation?: () => void;
}

export interface IProsFlag {
  isActive: boolean;
}

export interface RoadViewPorps {
  position: any;
}

// export interface ProductIprops {
//   isEdit: boolean;
//   data?: Pick<IQuery, "fetchUseditem">;
// }

// // export interface Product {
// //   isEdit: boolean;
// //   data?: Pick<IQuery, "fetchUseditem">;
// // }

// export interface IProductWriteProps {
//   data?: any;
//   isOpen: boolean;
//   handleOk: () => void;
//   handleCancel: () => void;
//   onChangePost: (data: any) => void;
//   onClickAddressSearch: () => void;
//   imageUrls: string[];
//   register: any;
//   onKeyUpHash: (event: any) => void;
//   onChangeContents: (value: string) => void;
//   formState: FormState<FieldValues>;
//   isEdit: boolean;
//   getValues: UseFormGetValues<FieldValues>;
//   setLat: any;
//   setLng: any;
//   address: string;
//   lat: number;
//   lng: number;
//   zipcode: string;
//   handleSubmit: UseFormHandleSubmit<FieldValues>;
//   onClickSubmit: (dasta: any) => void;
//   onChangeFile: (index: number) => (e: ChangeEvent<HTMLInputElement>) => void;
//   hashArr: String[];
//   onClickTagDelete: any;
// }

// export interface ImyUpdateUseditemInput {
//   name?: string;
//   remarks?: string;
//   price?: number;
//   contents?: string;
//   images?: string[];
//   useditemAddress?: {
//     zipcode?: string;
//     addressDetail?: string;
//     address?: string;
//     lat?: number;
//     lng?: number;
//   };
//   tags?: string[];
// }
