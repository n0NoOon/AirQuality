export interface City {
  idx: number;
  aqi: number;
  time: string;
  timezone: string;
  pm25: air[];
  pm10: air[];
  o3: air[];
  co: air[];
  so2: air[];
  fc_pm25: forecastInfo[];
  fc_pm10: forecastInfo[];
  fc_o3: forecastInfo[];
  fc_uvi: forecastInfo[];
}

interface forecastInfo {
  avg: number;
  day: string;
  max: number;
  min: string;
}

interface air {
  v: number;
}
