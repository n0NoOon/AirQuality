import Map from "@/components/Map";
import { useEffect, useState } from "react";
import Search from "./Search";
import Detail from "./Detail";
import AverageFeed from "./AverageFeed";
import { Feed } from "@/api/types/Feed";
import { Average } from "@/api/types/Average";

interface StationProps {
  station: Average | undefined;
}

export default function Home({ station }: StationProps) {
  const [places, setPlaces] = useState<Feed | null>(null);

  // console.log("placessss", places);

  return (
    <div className="h-screen w-auto grid grid-rows-12">
      <div className="row-span-2">
        <AverageFeed station={station} />
      </div>
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
            <Detail place={places} />
          </div>
        </div>
      </div>
    </div>
  );
}
