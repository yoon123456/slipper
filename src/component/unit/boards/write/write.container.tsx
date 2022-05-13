// 해리 작업 5/12
import WritePresenter from "./write.presenter";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WriteContainer() {
  return <WritePresenter ReactQuill={ReactQuill} />;
}
