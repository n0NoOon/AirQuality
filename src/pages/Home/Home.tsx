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
      <div className="row-span-2 flex gap-5 mt-5">
        <AverageFeed />
        <AverageFeed />
        <AverageFeed />
        <AverageFeed />
        <AverageFeed />
      </div>
      <div className="grid grid-cols-12 row-span-8">
        <div className="col-span-7 p-3">
          <Map place={places} layer={maplayer} />
          <div className="flex flex-row py-4">
            <button onClick={() => setMaplayer("aqi")} className="map-btn">
              AQI
            </button>
            <button onClick={() => setMaplayer("pm25")} className="map-btn">
              PM 2.5
            </button>
            <button onClick={() => setMaplayer("pm10")} className="map-btn">
              PM 10
            </button>
            <button onClick={() => setMaplayer("o3")} className="map-btn">
              Ozone
            </button>
            <button onClick={() => setMaplayer("so2")} className="map-btn">
              Sulfur Dioxide
            </button>
            <button onClick={() => setMaplayer("co")} className="map-btn">
              Carbon Monoxide
            </button>
          </div>
        </div>
        <div className="col-span-5 p-5">
          <div className="mb-5">
            <Search
              sendResult={(p) => {
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
