import SearchName from "@/api/quries/SearchName";
import { Average } from "@/api/types/Average";
import { useState } from "react";

interface Info {
  name: string;
  aqi: number;
}

export default function AverageFeed() {
  const [term, setTerm] = useState("");
  const [station, setStation] = useState<Average[]>();
  const [show, setShow] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await SearchName(term);
    // console.log(res);
    setStation(res);
    setShow(false);
  };

  const renderedStation = station?.map((station) => {
    const name = station.name;
    const aqi = station.aqi;

    const handleClick = () => {
      setShow(!show);
      const jLocal = JSON.stringify({ name, aqi });
      localStorage.setItem("place", jLocal);
    };

    return (
      <div key={station.uid} className="border border-black ">
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
    <div className="container relative ">
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="term">
            <input
              className="border border-black rounded w-full"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </label>
        </form>
      </div>
      <div className="absolute bg-violet-300 h-[16rem] overflow-y-auto z-[1001]">
        {renderedStation}
      </div>
    </div>
  );

  if (show) {
    const info = localStorage.getItem("place");
    if (info) {
      const useInfo: Info = JSON.parse(info);
      content = (
        <div
          className="flex flex-col items-center justify-evenly h-full"
          onClick={() => setShow(false)}
        >
          <div className="items-center">{useInfo.name}</div>
          <div className="row-span-2 flex flex-col items-center">
            <span>Average air quality</span>
            <span>{useInfo.aqi}</span>
          </div>
        </div>
      );
    }
  }

  return <div className="bg-red-600 w-full">{content}</div>;
}
