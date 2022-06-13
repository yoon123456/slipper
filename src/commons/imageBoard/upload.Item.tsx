import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { Modal } from "antd";
import { UPLOAD_BOARD_IMAGE } from "./upload.queries";
import * as S from "./upload.styles";
import { IImageUploadPageProps } from "./upload.types";

export default function ImageBoardUpload(props: IImageUploadPageProps) {
  const [uploadBoardImage] = useMutation(UPLOAD_BOARD_IMAGE);
  const fileRef = useRef<HTMLInputElement>(null);
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (!file) return;
    try {
      const result = await uploadBoardImage({
        variables: { files: file },
      });
      props.onChangeFileUrls(result.data.uploadBoardImage, props.index);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickImgUpload = () => {
    fileRef.current?.click();
  };

  return (
    <>
      {props.data?.fetchBoard.images ? (
        <S.UploadImage
          onClick={onClickImgUpload}
          src={
            "https://storage.googleapis.com/slipper-bucket/board/d291bd62-1433-48bd-b5ae-a1390816b1a4/2.png"
          }
        />
      ) : (
        <S.UploadButton onClick={onClickImgUpload}>
          <S.UploadIcon src="/image/boardimage.png" />
        </S.UploadButton>
      )}
      <S.UploadFileHidden type="file" onChange={onChangeFile} ref={fileRef} />
    </>
  );
}
