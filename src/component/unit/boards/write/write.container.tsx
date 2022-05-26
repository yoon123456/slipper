// 해리 작업 5/12
import WritePresenter from "./write.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./write.query";
import dynamic from "next/dynamic";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { IFormValues } from "./write.types";
import { IUpdateBoardInput } from "../../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import { kakaoAddress } from "../../../../commons/store/kakaounit";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WriteContainer(props) {
  const router = useRouter();
  const [address, setAddress] = useRecoilState(kakaoAddress);
  const [activeStep, SetActiveStep] = useState("first");
  const [startDate, SetStartDate] = useState("");
  const [endDate, SetEndDate] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [chkFirst, setChkFirst] = useState(false);
  const [chkSecond, setChkSecond] = useState(false);
  const [chkThird, setChkThird] = useState(false);
  const [score, setScore] = useState(0);
  const [mapStatus, setMapStatus] = useState(false);
  const [fileUrls, setFileUrls] = useState(["", "", "", ""]);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  console.log(address);
  const onClickFirstNext = () => {
    SetActiveStep("second");
    setMapStatus(true);
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

  const onClickFirst = () => {
    setChkFirst(true);
    setChkSecond(false);
    setChkThird(false);
    setScore(1);
  };
  const onClickSecond = () => {
    setChkFirst(false);
    setChkSecond(true);
    setChkThird(false);
    setScore(2);
  };
  const onClickThird = () => {
    setChkFirst(false);
    setChkSecond(false);
    setChkThird(true);
    setScore(3);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (value: any) => {
    setContents(value === "<p><br></p>" ? "" : value);
  };

  const onChangeFileUrls = (fileUrl: any, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl[0];
    setFileUrls(newFileUrls);
  };
  // console.log(fileUrls);

  const onClickWriteBoard = async (data: IFormValues) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            startDate,
            endDate,
            score,
            title,
            contents,
            category: address.group_name,
            // category:                 {address.group_name === ""
            // ? "기타"
            // : address.group_name}
            lat: address.position.lat,
            lng: address.position.lng,
            address: address.address_name,
            place: address.content,
            images: fileUrls,
          },
        },
      });
      console.log(result);
      Modal.success({ content: "회원님의 글이 정상적으로 등록되었습니다." });
      // router.push(`/boards/${result.data.createBoard.id}`);
      router.push(`/boards/${result.data.createBoard.id}`);
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
      onChangeRange={onChangeRange}
      onClickFirst={onClickFirst}
      onClickSecond={onClickSecond}
      onClickThird={onClickThird}
      chkFirst={chkFirst}
      chkSecond={chkSecond}
      chkThird={chkThird}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      mapStatus={mapStatus}
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      onClickWriteBoard={onClickWriteBoard}
      isEdit={props.isEdit}
      data={props.data}
      onClickEditBoard={onClickEditBoard}
      address={address}
    />
  );
}
