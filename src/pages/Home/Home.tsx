import Map from "@/components/Map";
import { useEffect, useState } from "react";
import Search from "./Search";
import Detail from "./Detail";
import { Average } from "@/api/types/Average";

export default function Home() {
  const [places, setPlaces] = useState<Average | null>(null);
  console.log(places, "Send");

  useEffect(() => {
    console.log(places, "It change");
  }, [places]);

  return (
    <div className="h-screen w-screen grid grid-rows-12">
      <div className="row-span-2">Average Feed!</div>
      <div className="grid grid-cols-12 row-span-8">
        <div className="col-span-7">
          <Map place={places} />
        </div>
        <div className="col-span-5">
          Details Window
          <div>
            <Search onPlaceClick={(p) => setPlaces(p)} />
          </div>
          <div>
            <Detail />
          </div>
        </div>
      </div>
    </div>
  );
}
