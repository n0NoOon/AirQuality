import { useState } from "react";
import searchFeed from "@/api/quries/SearchFeed";
import type { Feed } from "@/api/types/Feed";

interface LocationSearchProps {
  sendResult: (data: Feed | null) => void;
}

export default function Search({ sendResult }: LocationSearchProps) {
  const [term, setTerm] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log("term", term);
    fetchFeed();
  };

  const fetchFeed = async () => {
    const result = await searchFeed(term);
    // setPlaces(result);
    sendResult(result);
    // console.log("handleSubmit---->", result, result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="term" />
        <input
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter City / Station"
          id="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
}
