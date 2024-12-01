import Map from "@/components/Map";
import { useState } from "react";
import Search from "./Search";
import Detail from "./Detail";
import AverageFeed from "./AverageFeed";
import { Feed } from "@/api/types/Feed";

export default function Home() {
  const [places, setPlaces] = useState<Feed | null>(null);
  const [maplayer, setMaplayer] = useState("aqi");
  console.log(maplayer);
  // console.log("placessss", places);

  return (
    <div className="h-screen w-auto grid grid-rows-12">
      <div className="row-span-2 flex gap-5">
        <AverageFeed />
        <AverageFeed />
        <AverageFeed />
      </div>
      <div className="grid grid-cols-12 row-span-8">
        <div className="col-span-7">
          <Map place={places} layer={maplayer} />
          <div className="flex flex-row gap-4">
            <button onClick={() => setMaplayer("aqi")}>AQI</button>
            <button onClick={() => setMaplayer("pm25")}>PM 2.5</button>
            <button onClick={() => setMaplayer("pm10")}>PM 10</button>
            <button onClick={() => setMaplayer("o3")}>Ozone</button>
            <button onClick={() => setMaplayer("so2")}>Sulfur Dioxide</button>
            <button onClick={() => setMaplayer("co")}>Carbon Monoxide</button>
          </div>
        </div>
        <div className="col-span-5 p-5">
          Details Window
          <div>
            <Search
              SendResult={(p) => {
                setPlaces(p);
                // console.log("p", p);
              }}
            />
          </div>
          <div>
            <Detail place={places} />
          </div>
        </div>
      </div>
    </div>
  );
}
