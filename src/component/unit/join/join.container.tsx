import { useRouter } from "next/router";
import JoinPresenter from "./join.presenter";

export default function JoinContainer() {
  const router = useRouter();

  const onClickSlipper = () => {
    router.push(`/settimeout`);
  };
  // setTimeout(onClickSlipper, 1000);

  return <JoinPresenter onClickSlipper={onClickSlipper} />;
}
