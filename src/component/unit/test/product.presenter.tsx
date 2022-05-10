// import { uniqueId } from "lodash";
import { v4 as uuidv4 } from "uuid";
import Dompurify from "dompurify";
export default function TestPageUI(props: any) {
  return (
    <div>
      {props.data?.fetchUseditems.map((el: any) => (
        <div key={uuidv4()}>
          <div>
            {typeof window !== "undefined" ? (
              <div
                style={{ color: "blue" }}
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(el?.contents),
                }}
              ></div>
            ) : (
              <div style={{ color: "black" }}></div>
            )}
          </div>
        </div>
      )) || <div></div>}
    </div>
  );
}
