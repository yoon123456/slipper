// 0549982cd3b0d3e5c607cdd39e8c682d
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { WeatherProps, IWeatherOutput } from "../map.types";
import * as S from "./weather.styled";

let current: IWeatherOutput | undefined;

export default function WeatherAppleCation(props: WeatherProps) {
  const API_KEY = "3ec951baf1ef4dc9278598d83dab35be";

  const [data, setData] = useState();
  const weatherRef = useRef<HTMLButtonElement>(null);

  const callRestApi = async () => {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lng}&lang=kr&exclude=daily,alert&units=metric&appid=${API_KEY}`
    );
    setData(result?.data?.current);
    current = data;
  };

  useEffect(() => {
    weatherRef.current?.click();
  }, [props.lat, props.lng]);

  return (
    <>
      <S.WrapperOut>
        <S.ApiButton onClick={callRestApi} ref={weatherRef}>
          버튼
        </S.ApiButton>
        <S.CurrentWeather>
          {current?.weather?.map((el: any, index: number) => (
            <S.CurrentWeatherId key={index}>
              <S.CurrentWeatherId key={index}></S.CurrentWeatherId>
              <S.CurrentWeatherIcon
                src={`http://openweathermap.org/img/wn/${el.icon}.png`}
              />
            </S.CurrentWeatherId>
          ))}
        </S.CurrentWeather>
      </S.WrapperOut>
    </>
  );
}
