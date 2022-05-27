import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IMyinformationPresenter {
  data: any;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onChangeFileUrl: (fileUrl: string) => void;
  fileUrl: string[];
  onClickMoveToUpdate: () => void;
  onClickUpdateUser: (data: any) => void;
  editUser: boolean;
}
