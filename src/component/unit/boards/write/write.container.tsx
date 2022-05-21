// 해리 작업 5/12
import WritePresenter from "./write.presenter";
import { CREATE_BOARD } from "./write.query";
import dynamic from "next/dynamic";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { useState } from "react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WriteContainer() {
  const [startDate, SetStartDate] = useState("");
  const [endDate, SetEndDate] = useState("");
  // const [secondActive, SetSecondActive] = useState(false);
  // const [thirdActive, SetThirdActive] = useState(true);
  const [activeStep, SetActiveStep] = useState("first");
  const [fileUrls, setFileUrls] = useState(["", "", "", ""]);

  const [createBoard] = useMutation(CREATE_BOARD);

  const { register, handleSubmit, setValue, trigger, getValues, reset } =
    useForm({ mode: "onChange" });

  const onClickStartDate = () => {
    SetStartDate(document.getElementById("startDate")?.value);
  };
  const onClickEndDate = () => {
    SetEndDate(document.getElementById("endDate")?.value);
  };
  // console.log(startDate, endDate);

  const onChangeContents = (value: string) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickFirstNext = () => {
    SetActiveStep("second");
  };
  const onClickSecondPrev = () => {
    SetActiveStep("first");
  };
  const onClickSecondNext = () => {
    SetActiveStep("third");
  };
  const onClickThirdPrev = () => {
    SetActiveStep("second");
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickWriteBoard = async (data) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            startDate,
            endDate,
            title: data.title,
            contents: data.contents,
            images: fileUrls,
          },
        },
      });
      console.log(result);
      Modal.success({ content: "회원님의 글이 정상적으로 등록되었습니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <WritePresenter
      ReactQuill={ReactQuill}
      register={register}
      handleSubmit={handleSubmit}
      onClickStartDate={onClickStartDate}
      onClickEndDate={onClickEndDate}
      onChangeContents={onChangeContents}
      getValues={getValues}
      reset={reset}
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      // secondActive={secondActive}
      // thirdActive={thirdActive}
      activeStep={activeStep}
      onClickFirstNext={onClickFirstNext}
      onClickSecondPrev={onClickSecondPrev}
      onClickSecondNext={onClickSecondNext}
      onClickThirdPrev={onClickThirdPrev}
      onClickWriteBoard={onClickWriteBoard}
    />
  );
}
