// 해리 작업 5/12
import WritePresenter from "./write.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./write.query";
import dynamic from "next/dynamic";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";
import { IFormValues } from "./write.types";
import { IUpdateBoardInput } from "../../../../commons/types/generated/types";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WriteContainer(props) {
  const router = useRouter();

  const [activeStep, SetActiveStep] = useState("first");
  const [startDate, SetStartDate] = useState("");
  const [endDate, SetEndDate] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", "", ""]);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const {
    register,
    handleSubmit,
    formState,
    setValue,
    trigger,
    getValues,
    reset,
  } = useForm({ mode: "onChange" });

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
  const onChangeRange = (date: String, dateString: String) => {
    SetStartDate(dateString[0]);
    SetEndDate(dateString[1]);
  };
  // console.log(startDate, endDate);
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

  const onClickWriteBoard = async (data: IFormValues) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            startDate,
            endDate,
            score: 1,
            title: String(data?.title),
            contents: String(data?.contents),
            category: "카테고리 테스트",
            lat: "111111",
            lng: "333333",
            address: "주소 테스트",
            place: "가게명 테스트",
            images: String(fileUrls),
          },
          email: "yw01124@naver.com",
        },
      });
      console.log(data.title);
      console.log(data.contents);
      console.log(result);
      Modal.success({ content: "회원님의 글이 정상적으로 등록되었습니다." });
      // router.push(`/boards/${result.data.createBoard.id}`);
      router.push(`/boards/${result.data.testCreateBoard.id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickEditBoard = async (data: IFormValues) => {
    if (!data.title && !data.contents) {
      Modal.error({ content: "수정한 내용이 없습니다." });
      return;
    }
    const updateBoardInput: IUpdateBoardInput = {};
    if (data?.title) updateBoardInput.title = data?.title;
    if (data?.contents) updateBoardInput.contents = data?.contents;
    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardId,
          updateBoardInput,
        },
      });
      Modal.success({ content: "게시글 수정에 성공하였습니다!" });
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
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
      isEdit={props.isEdit}
      data={props.data}
      onClickEditBoard={onClickEditBoard}
    />
  );
}
