import { LatLng } from "leaflet";
import { useContext, createContext, useState } from "react";

export interface MarkerContextProps {
  show: boolean;
  setShow: (value: boolean) => void;
  value: LatLng | null;
  setValue: (value: LatLng | null) => void;
  removeValue: () => void;
}

const MarkerContext = createContext<MarkerContextProps>({
  show: false,
  setShow: (_value: boolean) => {},
  value: null,
  setValue: (_value: LatLng | null) => {},
  removeValue: () => {},
});

export const useMarker = () => {
  return useContext(MarkerContext);
};

export const MarkerProvider = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState<boolean>(false);
  const [value, setValuee] = useState<LatLng | null>(null);
  const setValue = (value: LatLng | null) => {
    // set max digit after comma
    if (value) {
      const lat = parseFloat(value.lat.toFixed(6));
      const lng = parseFloat(value.lng.toFixed(6));
      setValuee(new LatLng(lat, lng));
    }
  };

  const removeValue = () => {
    setValuee(null);
  };

  const valueContext: MarkerContextProps = {
    show,
    setShow,
    value,
    setValue,
    removeValue,
  };
  return (
    <MarkerContext.Provider value={valueContext}>
      {children}
    </MarkerContext.Provider>
  );
};
