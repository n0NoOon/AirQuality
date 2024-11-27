import { useState } from "react";
import { Average } from "@/api/types/Average";
import SearchName from "@/api/quries/SearchName";

interface LocationSearchProps {
  onPlaceClick: (data: Average | null) => void;
}

export default function Search({ onPlaceClick }: LocationSearchProps) {
  const [places, setPlaces] = useState<Average | null>(null);
  const [term, setTerm] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await SearchName(term);
    setPlaces(result);
    onPlaceClick(places);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="term" />
        <input
          id="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
}
