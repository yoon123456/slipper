// 해리 작업 5/12
import WritePresenter from "./write.presenter";
import { CREATE_BOARD } from "./write.query";
import dynamic from "next/dynamic";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WriteContainer() {
  const router = useRouter();

  const [startDate, SetStartDate] = useState("");
  const [endDate, SetEndDate] = useState("");
  const [activeStep, SetActiveStep] = useState("first");
  const [fileUrls, setFileUrls] = useState(["", "", "", ""]);

  const [createBoard] = useMutation(CREATE_BOARD);

  const { register, handleSubmit, setValue, trigger, getValues, reset } =
    useForm({ mode: "onChange" });

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
  const onChangeRange = (date, dateString) => {
    SetStartDate(dateString[0]);
    SetEndDate(dateString[1]);
  };
  console.log(startDate, endDate);
  const onChangeContents = (value: string) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
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
      router.push(`/boards/${result.data.createBoard._id}`);
      // router.push(`/products/${result.data.createUseditem._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <WritePresenter
      ReactQuill={ReactQuill}
      activeStep={activeStep}
      onClickFirstNext={onClickFirstNext}
      onClickSecondPrev={onClickSecondPrev}
      onClickSecondNext={onClickSecondNext}
      onClickThirdPrev={onClickThirdPrev}
      register={register}
      handleSubmit={handleSubmit}
      onChangeRange={onChangeRange}
      onChangeContents={onChangeContents}
      getValues={getValues}
      reset={reset}
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      onClickWriteBoard={onClickWriteBoard}
    />
  );
}
