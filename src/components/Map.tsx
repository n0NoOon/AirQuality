import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Feed } from "@/api/types/Feed";

interface MapProps {
  place: Feed | null;
  layer: string;
}

function MapFlyTo({ place }: { place: Feed | null }) {
  const map = useMap();
  useEffect(() => {
    if (place) {
      map.flyTo([place.latitude, place.longitude]);
    }
  }, [place, map]);
  return null;
}

function Map({ place, layer }: MapProps) {
  return (
    <MapContainer
      center={[13.7, 100.5]}
      zoom={12}
      scrollWheelZoom
      className="h-full"
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      <TileLayer
        url={`https://tiles.aqicn.org//tiles/usepa-${layer}/{z}/{x}/{y}.png?token=f2e31625803dbd97944d43e9f4193c30fcf93129`}
      />
      <MapFlyTo place={place} />
    </MapContainer>
  );
}

export default Map;
