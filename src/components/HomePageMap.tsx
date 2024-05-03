import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import useDaftarKampus from "../hooks/useDaftarKampus";

const HomePageMap = () => {
  const { data, isLoading, error } = useDaftarKampus();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <MapContainer
      center={[-5.45, 105.26667]}
      zoom={8}
      zoomDelta={0.5}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data?.map((item, index) => {
        return (
          <Marker key={index} position={[item.Y, item.X]}>
            <Popup>
              <h3>{item.Name}</h3>
              <p>{item.Alamat}</p>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default HomePageMap;
