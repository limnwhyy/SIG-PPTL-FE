import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { PerguruanTinggiProps } from "../constants/interfaces";
import { MdClose } from "react-icons/md";
import { useEffect } from "react";
import "./CatalogModalStyle.css";

const CatalogModal = ({
  data,
  handleClose,
}: {
  data: PerguruanTinggiProps | undefined;
  handleClose: () => void;
}) => {
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="catalog-modal">
      <div className="button-container">
        <MdClose size={32} onClick={handleClose} />
      </div>

      <div className="title">
        <h1>{data?.Name}</h1>
      </div>
      <figure>
        <img src={data?.Image} />
      </figure>
      <div className="text-container">
        <section id="description">
          <p>{data?.Deskripsi}</p>
        </section>
        <hr />
        <section id="other">
          <h3>Informasi Lainnya</h3>
          <p>Alamat: {data?.Alamat}</p>
          <p>Domisili: {data?.Kabupaten}</p>
          <p>Tanggal Didirikan: {data?.Tahun_Berdiri}</p>
          <p>Jumlah Program Studi: {data?.Jumlah_Prodi}</p>
        </section>
        <hr />
      </div>
      <div className="map-container">
        <h3>Denah</h3>
        <MapContainer
          center={[data ? data.Y : 0, data ? data.X : 0]}
          zoom={20}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[data!.Y, data!.X]}>
            <Popup>{data?.Name}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default CatalogModal;
