import { Modal } from "antd";
import axios from "axios";
import { useState } from "react";
import XMLPraser from "react-xml-parser";

export default function Criminal() {
  const [data, setData] = useState();

  const callRestApi = async () => {
    try {
      const result = await axios.get(
        "http://116.67.77.182/openapi/SOCitysStats/"
      );
      console.log(result);
    } catch (error: any) {
      Modal.error({ content: error });
    }
  };

  return (
    <div>
      <>
        <button onClick={callRestApi}>클릭</button>
      </>
    </div>
  );
}
