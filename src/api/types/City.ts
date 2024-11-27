// export interface CityResponse {
//   data: Data;
// }

// interface Data {
//   aqi: number;
//   idx: number;
//   city: City;
//   iaqi: Iaqi;
//   time: Time;
//   forecast: Forecast;
// }

// interface Forecast {
//   daily: Daily;
// }

// interface Daily {
//   o3: fc[];
//   pm10: fc[];
//   pm25: fc[];
//   uvi: fc[];
// }

// interface fc {
//   avg: number;
//   day: string;
//   max: number;
//   min: number;
// }

// interface Time {
//   s: string;
//   tz: string;
// }

// interface Iaqi {
//   co: Co;
//   o3: Co;
//   pm10: Co;
//   pm25: Co;
//   so2: Co;
// }

// interface Co {
//   v: number;
// }

// interface City {
//   geo: number[];
//   name: string;
// }

export interface CityResponse {
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
