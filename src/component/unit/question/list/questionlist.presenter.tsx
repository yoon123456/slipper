import QuestionListUIItem from "./questiontlist.presenteritem";
import { v4 as uuidv4 } from "uuid";
import { IQuestionListPresenter } from "./questionlist.types";

export default function QuestionListPresenter(props: IQuestionListPresenter) {
  return (
    <>
      {props.listData?.fetchComments.map((el: any) => (
        <QuestionListUIItem
          key={uuidv4()}
          el={el}
          data={props.data}
          listData={props.listData}
          userData={props.userData}
        />
      ))}
    </>
  );
}
