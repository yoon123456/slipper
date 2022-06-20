import { useMutation } from "@apollo/client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Modal } from "antd";
import { UPLOAD_BOARD_IMAGE } from "./upload.queries";
import * as S from "./upload.styles";
import { IImageUploadPageProps } from "./upload.types";

export default function ImageBoardUpload(props: IImageUploadPageProps) {
  const [imageAddress, setImageAddress] = useState(["", "", "", ""]);
  const [uploadBoardImage] = useMutation(UPLOAD_BOARD_IMAGE);
  const fileRef = useRef<HTMLInputElement>(null);
  const ImageRef = useRef<HTMLButtonElement>(null);

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
  ~useEffect(() => {
    ImageRef.current?.click();
  });

  const ImgeSplit = () => {
    const result = props.data?.fetchBoard.images;
    const image = result.filter(function (image: any) {
      return image.imageUrl !== "" ? setImageAddress([...image.imageUrl]) : "";
    });
  };

  return (
    <>
      {props.fileUrl ? (
        <S.UploadImage onClick={onClickImgUpload} src={props.fileUrl} />
      ) : (
        <S.UploadButton onClick={onClickImgUpload}>
          <S.UploadIcon src={"/image/boardimage.png"} />
        </S.UploadButton>
      )}
      <S.UploadFileHidden type="file" onChange={onChangeFile} ref={fileRef} />
    </>
  );
}
