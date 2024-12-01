import SearchName from "@/api/quries/SearchName";
import { Average } from "@/api/types/Average";
import { useEffect, useState } from "react";
import checkAvg from "@/components/checkAvg";
import { randomCity } from "@/components/randomCity";

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

  useEffect(() => {
    const a = randomCity();
    console.log(a);
    const fetchCity = async () => {
      const res = await SearchName(a);
      console.log(res);
      const onloadData = res[0];
      const convert = JSON.stringify({ onloadData });
      sessionStorage.setItem("place", convert);
    };
    fetchCity();
  }, []);

  const renderedStation = station?.map((station) => {
    const name = station.name;
    const aqi = station.aqi;

    const handleClick = () => {
      setShow(!show);
      const jLocal = JSON.stringify({ name, aqi });
      sessionStorage.setItem("place", jLocal);
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
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </label>
        </form>
      </div>
      <div className="absolute bg-inherit h-[16rem] overflow-y-auto z-[1001] w-full">
        {renderedStation}
      </div>
    </div>
  );

  const showInfo = () => {};

  if (show) {
    const info = sessionStorage.getItem("place");
    if (info) {
      const useInfo: Info = JSON.parse(info);
      content = (
        <div className="flex flex-col items-center justify-evenly h-full">
          <div className="items-center" onClick={() => setShow(false)}>
            {useInfo.name}
          </div>
          <div className="row-span-2 flex flex-col items-center">
            <span>Average air quality</span>
            <span>{checkAvg(useInfo.aqi)}</span>
          </div>
        </div>
      );
    }
  }

  return <div className="w-full flex justify-center text-white">{content}</div>;
}
