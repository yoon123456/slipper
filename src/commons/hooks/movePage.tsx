import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../store";

export function useMovetoPage() {
  const router = useRouter();
  const [visitedPage, setVisitPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: any) => () => {
    setVisitPage(path);
    router.push(path);
  };

  return {
    visitedPage,
    onClickMoveToPage,
  };
}
