import { useEffect, useState } from "react";
import { ShowAvg } from "./showAvg";
import { Average } from "@/api/types/Average";
import { useNavigate } from "react-router";
import { SearchPage } from "@/pages/Search/SearchPage";

interface StationProps {
  station: Average | undefined;
}

export function FetchAvg({ station }: StationProps) {
  const [term, setterm] = useState("");
  const [show, setShow] = useState(false);
  const [place, setPlace] = useState<Average | undefined>(undefined);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search?term=${term}`);
    setPlace(station);
    setShow(!show);
  };

  let content = (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="term">
          <input
            className="border border-black rounded"
            value={term}
            onChange={(e) => setterm(e.target.value)}
          />
        </label>
      </form>
    </div>
  );

  if (show) {
    content = <ShowAvg name={place?.name} aqi={place?.aqi} />;
  }

  return <div>{content}</div>;
}
