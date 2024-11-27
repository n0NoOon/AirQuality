import type { CityResponse } from "../types/City";

export interface citySearchResponse {
  data: Data;
}

interface Data {
  aqi: number;
  idx: number;
  city: City;
  iaqi: Iaqi;
  time: Time;
  forecast: Forecast;
}

interface Forecast {
  daily: Daily;
}

interface Daily {
  o3: fc[];
  pm10: fc[];
  pm25: fc[];
  uvi: fc[];
}

interface fc {
  avg: number;
  day: string;
  max: number;
  min: number;
}

interface Time {
  s: string;
  tz: string;
}

interface Iaqi {
  co: Co;
  o3: Co;
  pm10: Co;
  pm25: Co;
  so2: Co;
}

interface Co {
  v: number;
}

interface City {
  geo: number[];
  name: string;
}

export default async function SearchLocationByName(
  cityName: string
): Promise<CityResponse> {
  const token = "f2e31625803dbd97944d43e9f4193c30fcf93129";
  const res = await fetch(
    `https://api.waqi.info/feed/${cityName}/?token=${token}`
  );

  const result: citySearchResponse = await res.json();
  // console.log(result, "result in search");

  return {
    aqi: result.data.aqi,
    idx: result.data.idx,
    time: result.data.time.s,
    timezone: result.data.time.tz,
    pm25: result.data.iaqi.pm25,
    pm10: result.data.iaqi.pm10,
    o3: result.data.iaqi.o3,
    co: result.data.iaqi.co,
    so2: result.data.iaqi.so2,
    fc_pm25: result.data.forecast.daily.pm25,
    fc_pm10: result.data.forecast.daily.pm10,
    fc_o3: result.data.forecast.daily.o3,
    fc_uvi: result.data.forecast.daily.uvi,
    latitude: result.data.city.geo[0],
    longitude: result.data.city.geo[1],
    name: result.data.city.name,
  };
}
