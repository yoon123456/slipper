// 0549982cd3b0d3e5c607cdd39e8c682d
import axios from "axios";
import { useState } from "react";
import { WeatherProps, IWeatherOutput } from "../map.types";
import { currentTime } from "../../libraries/date";

let current: IWeatherOutput | undefined;

export default function WeatherAppleCation(props: WeatherProps) {
  const API_KEY = "3ec951baf1ef4dc9278598d83dab35be";

  const [data, setData] = useState();

  const callRestApi = async () => {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lng}&lang=kr&exclude=daily,alert&units=metric&appid=${API_KEY}`
    );
    setData(result?.data?.current);
    current = data;
  };

  return (
    <>
      <div>
        <button onClick={callRestApi}>버튼 </button>
        <div>
          {current?.weather?.map((el: any) => (
            <>
              <div key={el.id}></div>
              <div>{el.description}</div>
              <img src={`http://openweathermap.org/img/wn/${el.icon}.png`} />
            </>
          ))}
        </div>
        <div>{current?.feels_like}</div>
      </div>
      <div>{currentTime(current?.dt)}</div>
    </>
  );
}
