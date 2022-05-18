import { useRouter } from "next/router";
import QuestionWriteContainer from "../question/write/questionwrite.container";
import QuestionWritePresenter from "../question/write/questionwrite.presenter";
import JoinPresenter from "./join.presenter";

export default function JoinContainer() {
  const router = useRouter();

  const onClickSlipper = () => {
    router.push(`/settimeout`);
  };
  // setTimeout(onClickSlipper, 1000);

  return (
    <>
      <JoinPresenter onClickSlipper={onClickSlipper} />
    </>
  );
}
