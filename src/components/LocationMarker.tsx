import { Marker, Popup, useMapEvents } from "react-leaflet";
import { useMarker } from "../context/MarkerContext";

const LocationMarker = () => {
  const { value, setValue } = useMarker();
  //   const [position, setPosition] = useState<LatLng | null>(null);
  const map = useMapEvents({
    click(e) {
      setValue(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      //   console.log(value);
    },
  });
  return value === null ? null : (
    <Marker position={value}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export default LocationMarker;
