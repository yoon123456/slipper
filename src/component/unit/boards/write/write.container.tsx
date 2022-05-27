// haeri 작업시작 22.05.12
import WritePresenter from "./write.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./write.query";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState, MouseEvent } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { kakaoAddress } from "../../../../commons/store/kakaounit";
import { IWriteContainer } from "./write.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";

export default function WriteContainer(props: IWriteContainer) {
  const router = useRouter();
  const [activeStep, SetActiveStep] = useState("first");
  const [startDate, SetStartDate] = useState("");
  const [endDate, SetEndDate] = useState("");
  const [happy, setHappy] = useState(false);
  const [uhm, setUhm] = useState(false);
  const [sad, setSad] = useState(false);
  const [score, setScore] = useState(0);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [mapStatus, setMapStatus] = useState(false);
  const [address, setAddress] = useRecoilState(kakaoAddress);
  const [fileUrls, setFileUrls] = useState(["", "", "", ""]);

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  // haeri 단계 이동
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

  // haeri 기간 선택
  const onChangeRange = (date: any, dateString: any) => {
    SetStartDate(dateString[0]);
    SetEndDate(dateString[1]);
  };
  console.log(startDate, endDate);

  // haeri 만족도 선택
  const onClickHappy = () => {
    setHappy((prev) => !prev);
    setUhm(false);
    setSad(false);
    setScore(1);
  };
  const onClickUhm = () => {
    setHappy(false);
    setUhm((prev) => !prev);
    setSad(false);
    setScore(2);
  };
  const onClickSad = () => {
    setHappy(false);
    setUhm(false);
    setSad((prev) => !prev);
    setScore(3);
  };

  // haeri 제목 입력
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  // haeri 내용 입력
  const onChangeContents = (value: string) => {
    setContents(value === "<p><br></p>" ? "" : value);
  };

  // haeri 이미지 등록
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl[0];
    setFileUrls(newFileUrls);
  };

  // haeri 글 등록
  const onClickWriteBoard = async () => {
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
      router.push(`/boards/${result.data?.createBoard.id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // haeri 글 수정
  const onClickEditBoard = async () => {
    if (!title && !contents) {
      Modal.error({ content: "수정한 내용이 없습니다." });
      return;
    }
    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    try {
      await updateBoard({
        variables: {
          boardId: String(router.query.boardId),
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
      isEdit={props.isEdit}
      data={props.data}
      activeStep={activeStep}
      onClickFirstNext={onClickFirstNext}
      onClickSecondPrev={onClickSecondPrev}
      onClickSecondNext={onClickSecondNext}
      onClickThirdPrev={onClickThirdPrev}
      onChangeRange={onChangeRange}
      happy={happy}
      uhm={uhm}
      sad={sad}
      onClickHappy={onClickHappy}
      onClickUhm={onClickUhm}
      onClickSad={onClickSad}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      mapStatus={mapStatus}
      address={address}
      onClickWriteBoard={onClickWriteBoard}
      onClickEditBoard={onClickEditBoard}
    />
  );
}
