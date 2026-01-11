import "./map.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import ButtonMap from "../ButtonMap/buttonMap";

export default function Map() {
  const position = [8.973181, -83.529693];
  return (
    <>
      <MapContainer className="mapStyle" center={position} zoom={15}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={position}></Marker>
        <ButtonMap />
      </MapContainer>
    </>
  );
}
