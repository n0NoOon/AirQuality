import { useState } from "react";
import SearchName from "@/api/quries/SearchName";
import { ShowAvg } from "./showAvg";
import { Average } from "@/api/types/Average";

export function FetchAvg() {
  const [word, setWord] = useState("");
  const [show, setShow] = useState(false);
  const [place, setPlace] = useState<Average>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await SearchName(word);
    console.log(res);
    setPlace(res);
    setShow(!show);
  };

  let content = (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="word">
          <input
            className="border border-black rounded"
            value={word}
            onChange={(e) => setWord(e.target.value)}
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
