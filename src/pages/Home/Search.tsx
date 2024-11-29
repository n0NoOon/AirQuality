import { useState } from "react";
import { Average } from "@/api/types/Average";
import SearchName from "@/api/quries/SearchName";

interface LocationSearchProps {
  SendResult: (data: Average | null) => void;
}

export default function Search({ SendResult }: LocationSearchProps) {
  const [term, setTerm] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log("term", term);
    const result = await SearchName(term);
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
