import AnswernListUIItem from "./answerlist.presenteritem";
import { IAnswerListPresenter } from "./answerlist.types";
import { v4 as uuidv4 } from "uuid";
import AnswerWriteContainer from "../write/answerwrite.container";
import { SetStateAction } from "react";

export default function AnswerListPresenter(props: IAnswerListPresenter) {
  return (
    <>
      <AnswerWriteContainer
        data={props.data}
        isActive={true}
        isEdit={false}
        el={props.el}
        subCommentEl={undefined}
        setIsEdit={function (value: SetStateAction<boolean>): void {
          throw new Error("Function not implemented.");
        }}
      />
      {props.data?.fetchSubComment.map((subCommentEl: any) => (
        <AnswernListUIItem
          key={uuidv4()}
          data={props.data}
          subCommentEl={subCommentEl}
          isActive={props.isActive}
          el={props.el}
        />
      ))}
    </>
  );
}
