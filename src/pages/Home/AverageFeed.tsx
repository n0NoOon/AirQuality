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
      <div key={station.uid}>
        <button onClick={handleClick}>
          <div>{name}</div>
          <div>{aqi}</div>
        </button>
      </div>
    );
  });

  let content = (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="term">
            <input
              className="border border-black rounded"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </label>
        </form>
      </div>
      <div>{renderedStation}</div>
    </div>
  );

  if (show) {
    const info = localStorage.getItem("place");
    if (info) {
      const useInfo: Info = JSON.parse(info);
      content = (
        <div onClick={() => setShow(false)}>
          <div>{useInfo.name}</div>
          <div>{useInfo.aqi}</div>
        </div>
      );
    }
  }

  return (
    <div>
      <div>{content}</div>
    </div>
  );
}
