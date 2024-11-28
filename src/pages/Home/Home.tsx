import Map from "@/components/Map";
import { useEffect, useState } from "react";
import Search from "./Search";
import Detail from "./Detail";
import { Average } from "@/api/types/Average";

export default function Home() {
  const [places, setPlaces] = useState<Average | null>(null);

  // console.log("placessss", places);

  return (
    <div className="h-screen w-auto grid grid-rows-12">
      <div className="row-span-2">Average Feed!</div>
      <div className="grid grid-cols-12 row-span-8">
        <div className="col-span-7">
          <Map place={places} />
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
            <Detail place={places?.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
