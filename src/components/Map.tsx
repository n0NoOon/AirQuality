import "leaflet/dist/leaflet.css";
import { Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Feed } from "@/api/types/Feed";

interface MapProps {
  place: Feed | null;
  layer: string;
}

function Map({ place, layer }: MapProps) {
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (mapRef.current && place) {
      mapRef.current.flyTo([place.latitude, place.longitude]);
    }
  }, [place]);

  console.log("Layer", layer);

  return (
    <MapContainer
      ref={mapRef}
      center={[13.7, 100.5]}
      zoom={12}
      scrollWheelZoom
      className="h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      <TileLayer
        url={`https://tiles.aqicn.org//tiles/usepa-${layer}/{z}/{x}/{y}.png?token=f2e31625803dbd97944d43e9f4193c30fcf93129`}
      />
    </MapContainer>
  );
}

export default Map;
