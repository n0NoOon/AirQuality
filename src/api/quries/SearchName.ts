import type { Average } from "../types/Average";

interface airResponse {
  data: Data[];
}
interface Data {
  uid: number;
  aqi: number;
  station: {
    name: string;
  };
}

export default async function SearchName(keyword: string): Promise<Average[]> {
  const token = "f2e31625803dbd97944d43e9f4193c30fcf93129";
  const res = await fetch(
    `https://api.waqi.info/search/?keyword=${keyword}&token=${token}`
  );

  const result = (await res.json()) as airResponse;
  // console.log(result, "result in search");

  // const data = result.data[0];
  // console.log(data, "data");
  const data: Average[] = result.data.map((d) => {
    return {
      uid: d.uid,
      aqi: d.aqi,
      name: d.station.name,
    };
  });

  return data;

  // return {
  //   uid: data.uid,
  //   aqi: data.aqi,
  //   s: data.time.s,
  //   name: data.station.name,
  //   latitude: data.station.geo[0],
  //   longitude: data.station.geo[1],
  // };
}
