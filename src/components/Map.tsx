import "leaflet/dist/leaflet.css";
import { Map as LeafletMap } from "leaflet";
import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Feed } from "@/api/types/Feed";

interface MapProps {
  place: Feed | null;
  layer: string;
}

function Map({ place, layer }: MapProps) {
  const mapRef = useRef<LeafletMap | null>(null);
  const [mapLayer, setMapLayer] = useState(
    "https://tiles.aqicn.org//tiles/usepa-aqi/{z}/{x}/{y}.png?token=f2e31625803dbd97944d43e9f4193c30fcf93129"
  );

  useEffect(() => {
    if (mapRef.current && place) {
      mapRef.current.flyTo([place.latitude, place.longitude]);
    }
  }, [place]);

  console.log("Layer", layer);
  console.log("Map", mapLayer);

  useEffect(() => {
    if (layer === "aqi") {
      setMapLayer(
        "https://tiles.aqicn.org//tiles/usepa-aqi/{z}/{x}/{y}.png?token=f2e31625803dbd97944d43e9f4193c30fcf93129"
      );
    }
    if (layer === "pm25") {
      setMapLayer(
        "https://tiles.aqicn.org//tiles/usepa-pm25/{z}/{x}/{y}.png?token=f2e31625803dbd97944d43e9f4193c30fcf93129"
      );
    }
    if (layer === "pm10") {
      setMapLayer(
        "https://tiles.aqicn.org//tiles/usepa-pm10/{z}/{x}/{y}.png?token=f2e31625803dbd97944d43e9f4193c30fcf93129"
      );
    }
    if (layer === "o3") {
      setMapLayer(
        "https://tiles.aqicn.org//tiles/usepa-o3/{z}/{x}/{y}.png?token=f2e31625803dbd97944d43e9f4193c30fcf93129"
      );
    }
    if (layer === "so2") {
      setMapLayer(
        "https://tiles.aqicn.org//tiles/usepa-so2/{z}/{x}/{y}.png?token=f2e31625803dbd97944d43e9f4193c30fcf93129"
      );
    }
    if (layer === "co") {
      setMapLayer(
        "https://tiles.aqicn.org//tiles/usepa-co/{z}/{x}/{y}.png?token=f2e31625803dbd97944d43e9f4193c30fcf93129"
      );
    }
  }, [layer]);

  return (
    <MapContainer
      ref={mapRef}
      center={[13.7, 100.5]}
      zoom={12}
      scrollWheelZoom
      className="h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <TileLayer url={mapLayer} />
    </MapContainer>
  );
}

export default Map;
