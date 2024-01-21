import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const Gmap = () => {
  const marklogo = new Icon({
    iconUrl: "https://i.ibb.co/HN6s3KG/location-1.png",
    iconSize: [56, 56],
  });

  return (
    <MapContainer
      center={[23.822651, 90.393418]}
      zoom={18}
      style={{ height: "100%", width: "100%", zIndex: "2" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[23.822654, 90.393418]} icon={marklogo}>
        <Popup>Invis | ECB Chattar</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Gmap;