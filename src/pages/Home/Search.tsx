import { useState } from "react";
import SearchFeed from "@/api/quries/SearchFeed";
import type { Feed } from "@/api/types/Feed";

interface LocationSearchProps {
  SendResult: (data: Feed | null) => void;
}

export default function Search({ SendResult }: LocationSearchProps) {
  const [term, setTerm] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log("term", term);
    FetchFeed();
  };

  const FetchFeed = async () => {
    const result = await SearchFeed(term);
    // setPlaces(result);
    SendResult(result);
    // console.log("handleSubmit---->", result, result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="term" />
        <input
          className="border border-black rounded"
          placeholder="Enter City / Station"
          id="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
}
