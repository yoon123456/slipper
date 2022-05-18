// 해리 작업 5/15
import MyinformationPresenter from "./myinformation.presenter";
import { useState } from "react";

export default function MyinformationContainer() {
  const [isToEdit, setIsToEdit] = useState(false);

  const onClickToEdit = () => {
    setIsToEdit(true);
  };
  const onClickFinishEdit = () => {
    setIsToEdit(false);
  };

  return (
    <MyinformationPresenter
      isToEdit={isToEdit}
      onClickToEdit={onClickToEdit}
      onClickFinishEdit={onClickFinishEdit}
    />
  );
}
