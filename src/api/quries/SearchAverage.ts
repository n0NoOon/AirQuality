import type { Average } from "../types/Average";

interface airResponse {
  data: Data[];
}
interface Data {
  uid: number;
  aqi: number;
  time: {
    s: string;
  };
  city: {
    name: string;
    geo: number[];
  };
}

export default async function SearchAverage(keyword: string) {
  const token = "f2e31625803dbd97944d43e9f4193c30fcf93129";
  const res = await fetch(
    `https://api.waqi.info/search/keyword=${keyword}&token=${token}`
  );

  const result = (await res.json()) as airResponse;

  const avg: Average[] = result.data.map((d) => {
    return {
      uid: d.uid,
      aqi: d.aqi,
      s: d.time.s,
      name: d.city.name,
      latitude: d.city.geo[0],
      logitude: d.city.geo[1],
    };
  });

  return avg;
}
