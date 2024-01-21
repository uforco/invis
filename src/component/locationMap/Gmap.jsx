import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Gmap = () => {
  return (
    <MapContainer
      center={[23.822651, 90.393418]}
      zoom={18}
      style={{ height: "100%", width: "100%", zIndex: "2" }}
    >
      <TileLayer
        attribution="&copy; InVis"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[23.822654, 90.393418]}>
        <Popup>
          Invis | ECB Chattar
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Gmap;
