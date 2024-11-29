import { useLoaderData } from "react-router";
import type { SearchLoaderResult } from "./SearchLoader";
import { Average } from "@/api/types/Average";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Station {
  onStationClick: (result: Average) => void;
}

export function SearchPage({ onStationClick }: Station) {
  const { searchResult } = useLoaderData() as SearchLoaderResult;
  //   console.log("Loader", searchResult);

  const renderedStation = searchResult.map((result) => {
    return (
      <div className="border items-center" key={result.uid}>
        <div>
          <Link to={"/"} onClick={() => onStationClick(result)}>
            {result.name}
          </Link>
        </div>
        <div>Real Time Air Quality{result.aqi}</div>
      </div>
    );
  });

  return (
    <div>
      <div>{renderedStation}</div>
    </div>
  );
}
