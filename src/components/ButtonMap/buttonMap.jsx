import { useMap } from "react-leaflet";

export default function ButtonMap() {
  const map = useMap();
  const center = [8.973181, -83.529693];

  const handleClick = () => {
    map.setView(center, 15);
  };

  return (
    <button className="btnCenterMap" onClick={handleClick}>
      <img src="/ic-mark.svg" alt="marker map" className="styleImg" />
    </button>
  );
}
