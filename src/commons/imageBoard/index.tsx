import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { Modal } from "antd";
import styled from "@emotion/styled";

const UPLOAD_BOARD_IMAGE = gql`
  mutation uploadBoardImage($files: [Upload!]!) {
    uploadBoardImage(files: $files)
  }
`;

const UploadImage = styled.img`
  width: 40%;
  height: 50%;
  margin-right: 24px;
  cursor: pointer;
`;
const UploadButton = styled.div`
  width: 40%;
  height: 50%;
  /* margin-right: 24px; */
  outline: none;
  border: none;
  cursor: pointer;
`;
const UploadIcon = styled.img`
  width: 100%;
  height: 100%;
`;
const UploadFileHidden = styled.input`
  display: none;
`;

interface IImageUploadPageProps {
  // onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  index: number;
  fileUrl: string;
  // onClickImgUpload = () => void;
}
export default function ImageBoardUpload(props: IImageUploadPageProps) {
  const [uploadBoardImage] = useMutation(UPLOAD_BOARD_IMAGE);
  // const [imgUrl, setImgUrl] = useState("");
  const fileRef = useRef(null);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (!file) return;
    try {
      const result = await uploadBoardImage({
        variables: { files: file },
      });
      props.onChangeFileUrls(result.data.uploadBoardImage, props.index);
      // console.log(data);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickImgUpload = () => {
    fileRef.current?.click();
  };

  return (
    <>
      {props.fileUrl !== "" ? (
        <UploadImage onClick={onClickImgUpload} src={`${props.fileUrl}`} />
      ) : (
        <UploadButton type="button" onClick={onClickImgUpload}>
          {/* <>+</> */}
          {/* <>Upload</> */}
          <UploadIcon src="/image/uploadIcon.png" />
        </UploadButton>
      )}
      <UploadFileHidden
        // style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
      />
    </>
  );
}
