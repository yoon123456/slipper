import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IMyinformationPresenter {
  data: any;
  register: UseFormRegister<FieldValues>;
  handleSubmit: any;
  formState: any;
  onChangeFileUrl: (fileUrl: string) => void;
  fileUrl: string[];
  onClickMoveToUpdate: () => void;
  onClickUpdateUser: (data: any) => void;
  editUser: boolean;
}
