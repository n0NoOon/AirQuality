export interface Feed {
  idx: number;
  aqi: number;
  time: string;
  timezone: string;
  pm25: number;
  pm10: number;
  o3: number;
  co: number;
  so2: number;
  fc_pm25: FORECAST[];
  fc_pm10: FORECAST[];
  fc_o3: FORECAST[];
  fc_uvi: FORECAST[];
  latitude: number;
  longitude: number;
  name: string;
}

interface FORECAST {
  avg: number;
  day: string;
  max: number;
  min: number;
}
