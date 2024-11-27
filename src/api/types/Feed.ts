export interface Feed {
  idx: number;
  aqi: number;
  time: string;
  timezone: string;
  pm25: air;
  pm10: air;
  o3: air;
  co: air;
  so2: air;
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

interface air {
  v: number;
}
