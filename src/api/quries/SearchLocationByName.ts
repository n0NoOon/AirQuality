import type { City } from "../types/City";

interface citySearchResponse {
  data: info[];
}

interface info {
  idx: number;
  aqi: number;
  forecast: {
    daily: {
      o3: FORECAST[];
      pm10: FORECAST[];
      pm25: FORECAST[];
      uvi: FORECAST[];
    };
  };
  iaqi: {
    pm25: air[];
    pm10: air[];
    o3: air[];
    co: air[];
    so2: air[];
  };
  time: {
    s: string;
    tz: string;
  };
}

interface FORECAST {
  avg: number;
  day: string;
  max: number;
  min: string;
}

interface air {
  v: number;
}

export default async function searchByName(city: string) {
  const token = "f2e31625803dbd97944d43e9f4193c30fcf93129";
  const res = await fetch(`https://api.waqi.info/feed/${city}/?token=${token}`);

  const result = (await res.json()) as citySearchResponse;
  console.log(result, "result");

  const cityInfo: City[] = result.data.map((d) => {
    return {
      aqi: d.aqi,
      idx: d.idx,
      time: d.time.s,
      timezone: d.time.tz,
      pm25: d.iaqi.pm25,
      pm10: d.iaqi.pm10,
      o3: d.iaqi.o3,
      co: d.iaqi.co,
      so2: d.iaqi.so2,
      fc_pm25: d.forecast.daily.pm25,
      fc_pm10: d.forecast.daily.pm10,
      fc_o3: d.forecast.daily.o3,
      fc_uvi: d.forecast.daily.uvi,
    };
  });
  return cityInfo;
}
