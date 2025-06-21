import Map from "@/components/Map";
import { useEffect, useState } from "react";
import Search from "./Search";
import Detail from "./Detail";
import AverageFeed, { Info } from "./AverageFeed";
import { Feed } from "@/api/types/Feed";

export default function Home() {
  const [places, setPlaces] = useState<Feed | null>(null);
  const [mapLayer, setMapLayer] = useState("aqi");
  const [mapType, setMapType] = useState("Real time AirQuality");
  const [favCities, setFavCities] = useState<(Info | null)[]>([
    null,
    null,
    null,
  ]);
  // console.log(maplayer);
  // console.log("placessss", places);

  const clearCity = () => setPlaces(null);

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
    localStorage.setItem("places", JSON.stringify(nowFavCities));
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="bg-[#414242] rounded-xl mt-5 border border-gray-600 shadow-md md:flex md:py-4">
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
      <div className="flex flex-col md:grid md:grid-cols-2 gap-2">
        <div className="flex flex-col">
          <Map place={places} layer={mapLayer} />
          <div className="flex flex-wrap">
            {/* MapType Selector */}
            <div className="bg-white font-bold text-md text-center content-center rounded-full mt-3 px-5 py-2.5 me-2 mb-1">
              {mapType}
            </div>
            <button
              onClick={() => {
                setMapLayer("aqi");
                setMapType("Real time AirQuality");
              }}
              className="map-btn"
            >
              Real time AirQuality
            </button>
            <button
              onClick={() => {
                setMapLayer("pm25");
                setMapType("PM 2.5");
              }}
              className="map-btn"
            >
              PM 2.5
            </button>
            <button
              onClick={() => {
                setMapLayer("pm10");
                setMapType("PM 10");
              }}
              className="map-btn"
            >
              PM 10
            </button>
            <button
              onClick={() => {
                setMapLayer("o3");
                setMapType("Ozone");
              }}
              className="map-btn"
            >
              Ozone
            </button>
            <button
              onClick={() => {
                setMapLayer("so2");
                setMapType("Sulfur Dioxide");
              }}
              className="map-btn"
            >
              Sulfur Dioxide
            </button>
            <button
              onClick={() => {
                setMapLayer("co");
                setMapType("Carbon Monoxide");
              }}
              className="map-btn"
            >
              Carbon Monoxide
            </button>
          </div>
        </div>
        <div className="mt-3">
          <div className="mb-2">
            {!places && (
              <Search
                sendResult={(p) => {
                  setPlaces(p);
                }}
              />
            )}
          </div>
          <div>
            <Detail place={places} clearCity={clearCity} />
          </div>
        </div>
      </div>
    </div>
  );
}
