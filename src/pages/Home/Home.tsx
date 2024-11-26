import Map from "@/components/Map";
import { useState } from "react";
import type { Place } from "@/api/types/Place";

export default function Home() {
  const [places, setPlaces] = useState<Place | null>(null);

  return (
    <div className="h-screen w-screen grid grid-rows-12">
      <div className="row-span-2">Average Feed!</div>
      <div className="grid grid-cols-12 row-span-8">
        <div className="col-span-7">
          <Map place={places} />
        </div>
        <div className="col-span-5">Details Window</div>
      </div>
    </div>
  );
}
