import SearchName from "@/api/quries/SearchName";
import { Average } from "@/api/types/Average";
import { useState } from "react";

interface receive {
  name: string | undefined;
  aqi: number | undefined;
}

export function ShowAvg({ name, aqi }: receive) {
  return (
    <div>
      <div>{name}</div>
      <div>{aqi}</div>
    </div>
  );
}
