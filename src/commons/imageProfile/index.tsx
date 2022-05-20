import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { Modal } from "antd";
import styled from "@emotion/styled";

const UPLOAD_PROFILE_IMAGE = gql`
  mutation uploadProfileImage($files: [Upload!]!) {
    uploadProfileImage(files: $files)
  }
`;

const UploadImage = styled.img`
  width: 30%;
  height: 30%;
  margin-right: 24px;
  cursor: pointer;
`;

const UploadButton = styled.div`
  width: 30%;
  height: 30%;
  background-color: none;
  /* background-color: #bdbdbd; */
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;

const UploadImageBox = styled.img`
  width: 60%;
`;
const UploadMent = styled.div`
  margin-top: 10%;
  font-size: 1.3rem;
`;

const UploadFileHidden = styled.input`
  display: none;
`;
interface IImageProfileProps {
  onChangeFileUrl: (fileUrl: string) => void;
  fileUrl?: string[];
}
export default function ImageProfile(props: IImageProfileProps) {
  const [uploadProfileImage] = useMutation(UPLOAD_PROFILE_IMAGE);
  const fileRef = useRef<HTMLInputElement>(null);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (!file) return;

    try {
      const result = await uploadProfileImage({
        variables: { files: file },
      });
      console.log(result);
      props.onChangeFileUrl(result.data.uploadProfileImage);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickImgUpload = () => {
    fileRef.current?.click();
  };

  return (
    <>
      {props.fileUrl[0] !== "" ? (
        <UploadImage onClick={onClickImgUpload} src={`${props.fileUrl}`} />
      ) : (
        <UploadButton type="button" onClick={onClickImgUpload}>
          <UploadImageBox src="/image/upload.gif"></UploadImageBox>
          <UploadMent>프로필 이미지 등록↑</UploadMent>
        </UploadButton>
      )}
      <UploadFileHidden
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
      />
    </>
  );
}

{
  /* <a target="_blank" href="https://icons8.com/icon/9hyTizhOTdix/업로드">업로드</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */
}
