import Map from "@/components/Map";
import { useEffect, useState } from "react";
import Search from "./Search";
import Detail from "./Detail";
import AverageFeed, { Info } from "./AverageFeed";
import { Feed } from "@/api/types/Feed";

export default function Home() {
  const [places, setPlaces] = useState<Feed | null>(null);
  const [maplayer, setMaplayer] = useState("aqi");
  const [favCities, setFavCities] = useState<(Info | null)[]>([
    null,
    null,
    null,
    null,
    null,
  ]);
  // console.log(maplayer);
  // console.log("placessss", places);

  useEffect(() => {
    const favPlaceJSON = localStorage.getItem("places");
    if (favPlaceJSON) {
      const favPlaces = JSON.parse(favPlaceJSON);
      setFavCities(favPlaces);
    }
  }, []);

  const addFavCities = (city: Info, pos: number) => {
    const newFavCities = [...favCities];
    newFavCities[pos] = city;
    setFavCities(newFavCities);
    localStorage.setItem("places", JSON.stringify(newFavCities));
  };

  const deleteFavCities = (city: null, pos: number) => {
    const nowFavCities = [...favCities];
    nowFavCities[pos] = city;
    setFavCities(nowFavCities);
    localStorage.setItem("place", JSON.stringify(nowFavCities));
  };

  return (
    <div className="h-screen w-auto grid grid-rows-12">
      <div className="bg-[#414242] rounded-xl row-span-2 flex mt-5 border border-gray-600 shadow-md">
        {favCities.map((fc, idx) => (
          <AverageFeed
            key={idx}
            detail={fc}
            addFav={addFavCities}
            pos={idx}
            delFav={deleteFavCities}
          />
        ))}
      </div>
      <div className="grid grid-cols-12 row-span-8">
        <div className="col-span-7 p-3">
          <Map place={places} layer={maplayer} />
          <div className="flex flex-row py-4">
            <button onClick={() => setMaplayer("aqi")} className="map-btn">
              Real time AirQuality
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
