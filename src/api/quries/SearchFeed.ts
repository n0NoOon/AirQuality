import type { Feed } from "../types/Feed";

export interface CitySearchResponse {
  status: string;
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

export default async function searchFeed(
  cityName: string | undefined
): Promise<Feed | null> {
  const token = "f2e31625803dbd97944d43e9f4193c30fcf93129";
  let res = await fetch(
    `https://api.waqi.info/feed/${cityName}/?token=${token}`
  );

  const result: CitySearchResponse = await res.json();
  console.log(result, "result in search");

  if (result.status !== "ok") {
    console.error("Error in API response:", result);
    return null;
  }

  const { data } = result;
  const {
    iaqi,
    forecast: { daily },
    city,
  } = data;

  return {
    aqi: data.aqi,
    idx: data.idx,
    time: data.time?.s,
    timezone: data.time?.tz,
    pm25: iaqi.pm25?.v,
    pm10: iaqi.pm10?.v,
    o3: iaqi.o3?.v,
    co: iaqi.co?.v,
    so2: iaqi.so2?.v,
    fc_pm25: daily?.pm25,
    fc_pm10: daily?.pm10,
    fc_o3: daily?.o3,
    fc_uvi: daily?.uvi,
    latitude: city.geo[0],
    longitude: city.geo[1],
    name: city.name,
  };
}
