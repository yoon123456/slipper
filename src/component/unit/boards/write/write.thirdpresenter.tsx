import ImageBoardUpload from "../../../../commons/imageBoard/upload.Item";
import { v4 as uuidv4 } from "uuid";
import { IPropsWriteThird } from "./write.types";
import * as S from "./write.styles";
export default function Third(props: IPropsWriteThird) {
  console.log(props.fileUrls);
  return (
    <>
      {props.activeStep === "third" && (
        <>
          <S.ImageBodyWrapper>
            <S.Body>
              <S.ImageBody>
                {props.fileUrls.map((el: any, index: any) => (
                  <ImageBoardUpload
                    key={uuidv4()}
                    index={index}
                    fileUrl={el}
                    onChangeFileUrls={props.onChangeFileUrls}
                    data={props.data}
                  />
                ))}
              </S.ImageBody>
            </S.Body>
            <S.ImageButtonWrapper>
              <S.Button
                isButtonActive={props.isButtonActive}
                onClick={props.onClickThirdPrev}
              >
                &lt;
              </S.Button>
              <S.FinishButton
                onClick={
                  props.isEdit
                    ? props.onClickEditBoard
                    : props.onClickWriteBoard
                }
              >
                {props.isEdit ? "수정" : "등록"}
              </S.FinishButton>
            </S.ImageButtonWrapper>
          </S.ImageBodyWrapper>
        </>
      )}
    </>
  );
}
