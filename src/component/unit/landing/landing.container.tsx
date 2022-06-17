import { useRouter } from "next/router";
import LandingPresenter from "./landing.presenter";

export default function LandingContainer() {
  const router = useRouter();

  const onClickMoveToList = () => {
    router.push("/boards");
  };
  const onClickMoveBoardNew = () => {
    router.push("/boards/new");
  };

  return (
    <>
      <LandingPresenter
        onClickMoveToList={onClickMoveToList}
        onClickMoveBoardNew={onClickMoveBoardNew}
      />
    </>
  );
}
