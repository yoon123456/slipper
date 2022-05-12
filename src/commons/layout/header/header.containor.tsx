import { useMovetoPage } from "../../hooks/movePage";
import HeaderPresenter from "./header.presenter";

export default function HeaderContainor() {
  const { onClickMoveToPage } = useMovetoPage();

  return <HeaderPresenter />;
}
