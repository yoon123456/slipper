import axios from "axios";
import { useState } from "react";

export default function Criminal() {
  const [data, setData] = useState();

  const callRestApi = async () => {
    const result = await axios.get("http://116.67.77.182/index.jsp");

    console.log(result);
  };

  return (
    <div>
      <>
        <button onClick={callRestApi}>클릭</button>
      </>
    </div>
  );
}
