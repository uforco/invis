import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const Gmap = () => {
  const marklogo = new Icon({
    iconUrl: "https://i.ibb.co/HN6s3KG/location-1.png",
    iconSize: [56, 56],
  });

  return (
    <div className=" relative w-full h-full " >
      <div className=" z-0 w-full bg-blue-gray-400 h-full " >
        <MapContainer
          center={[23.822651, 90.394500]}
          zoom={17}
          style={{ height: "100%", width: "100%", zIndex: "2" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[23.822854, 90.393418]} icon={marklogo}>
            <Popup>Invis | ECB Chattar</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className=" absolute w-full h-full z-10 top-0 left-0 right-0 " ></div>
    </div>
  );
};

export default Gmap;
