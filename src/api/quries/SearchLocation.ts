import type { Place } from "../types/Place";

interface searchResponse {
  features: Feature[];
}

interface Feature {
  geometry: {
    coordinates: number[];
  };
  properties: {
    place_id: number;
    display_name: string;
    name: string;
  };
}

export const searchLocation = async (term: string) => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&layer=address&limit=5`
  );
  const data = (await res.json()) as searchResponse;

  const places: Place[] = data.features.map((feature) => {
    return {
      id: feature.properties.place_id,
      display_name: feature.properties.display_name,
      longitude: feature.geometry.coordinates[0],
      latitude: feature.geometry.coordinates[1],
      name: feature.properties.name,
    };
  });

  return places;
};
