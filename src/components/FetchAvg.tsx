import { useState } from "react";
import SearchName from "@/api/quries/SearchName";
import { ShowAvg } from "./showAvg";
import { Average } from "@/api/types/Average";
import { useNavigate } from "react-router";

export function FetchAvg() {
  const [term, setterm] = useState("");
  const [show, setShow] = useState(false);
  const [place, setPlace] = useState<Average>();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const res = await SearchName(term);
    // console.log(res);
    // setPlace(res);
    navigate(`/search?term=${term}`);
    // if (res) {
    //   setShow(!show);
    // }
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
