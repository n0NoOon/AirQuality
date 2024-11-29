import "leaflet/dist/leaflet.css";
import { Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Feed } from "@/api/types/Feed";

interface MapProps {
  place: Feed | null;
}

function Map({ place }: MapProps) {
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (mapRef.current && place) {
      mapRef.current.flyTo([place.latitude, place.longitude]);
    }
  }, [place]);

  return (
    <MapContainer
      ref={mapRef}
      center={[13.7, 100.5]}
      zoom={12}
      scrollWheelZoom
      className="h-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <TileLayer url="https://tiles.aqicn.org//tiles/usepa-aqi/{z}/{x}/{y}.png?token=f2e31625803dbd97944d43e9f4193c30fcf93129" />
    </MapContainer>
  );
}

export default Map;
