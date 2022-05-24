import { useQuery } from "@apollo/client";
import { useMovetoPage } from "../../hooks/movePage";
import HeaderPresenter from "./header.presenter";
import { FETCH_USER } from "./header.queries";
export default function HeaderContainer() {
  const { onClickMoveToPage } = useMovetoPage();
  const { data } = useQuery(FETCH_USER);
  return <HeaderPresenter onClickMoveToPage={onClickMoveToPage} data={data} />;
}
