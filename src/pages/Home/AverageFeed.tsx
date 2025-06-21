import SearchName from "@/api/quries/SearchName";
import { Average } from "@/api/types/Average";
import { useState } from "react";
import checkAvg from "@/components/checkAvg";

export interface Info {
  name: string;
  aqi: number;
}
interface AverageFeedProps {
  pos: number;
  addFav: (city: Info, pos: number) => void;
  detail: Info | null;
  delFav: (city: null, pos: number) => void;
}

export default function AverageFeed(props: AverageFeedProps) {
  const [term, setTerm] = useState("");
  const [station, setStation] = useState<Average[]>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await SearchName(term);
    // console.log(res);
    setStation(res);
  };

  const renderedStation = station?.map((station) => {
    const name = station.name;
    const aqi = station.aqi;

    const handleClick = () => {
      props.addFav({ name, aqi }, props.pos);
    };

    return (
      <div
        key={station.uid}
        className="border border-black bg-gray-300 text-black"
      >
        <button
          onClick={handleClick}
          className="flex flex-col items-center w-full"
        >
          <span>{name}</span>
          <span>{aqi}</span>
        </button>
      </div>
    );
  });

  let content = (
    <div className="container relative">
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="term">
            <input
              className="border-none rounded w-full bg-[#4f5050] text-white text-center"
              placeholder="Enter a city name"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </label>
        </form>
      </div>
      {term && (
        <div className="absolute bg-inherit h-[16rem] overflow-y-auto z-[1001] w-full">
          {renderedStation}
        </div>
      )}
    </div>
  );

  const detail = props.detail;
  if (detail) {
    content = (
      <div className="flex flex-col items-center justify-evenly h-full text-center">
        <div
          className="items-center hover:cursor-pointer font-bold"
          onClick={() => props.delFav(null, props.pos)}
        >
          {detail.name}
        </div>
        <div className="row-span-2 flex flex-col items-center border-t-2">
          <span>Average air quality</span>
          <span>{checkAvg(detail.aqi)}</span>
        </div>
      </div>
    );
  }

  return <div className="w-full flex justify-center text-white">{content}</div>;
}
