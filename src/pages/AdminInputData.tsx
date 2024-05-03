import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import LocationMarker from "../components/LocationMarker";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMarker } from "../context/MarkerContext";
import { InputDataProps } from "../constants/types";
import { axiosInstance } from "../utils/axios";
import { useEffect, useState } from "react";
import "./AdminInputDataStyle.css";

const AdminInputData = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const { value, removeValue } = useMarker();

  const { register, handleSubmit, watch, setValue } = useForm<InputDataProps>();

  const onSubmit: SubmitHandler<InputDataProps> = async (data) => {
    try {
      const newData = {
        ...data,
        Jumlah_Prodi: +data.Jumlah_Prodi,
        Tahun_Berdiri: +data.Tahun_Berdiri,
        X: +data.X,
        Y: +data.Y,
      };

      await axiosInstance.post("/v1/koordinat-kampus/", newData);
      alert("Berhasil menambahkan data perguruan tinggi");
      removeValue();
      setValue("Name", "");
      setValue("Tahun_Berdiri", 0);
      setValue("Jumlah_Prodi", 0);
      setValue("Kabupaten", "");
      setValue("Deskripsi", "");
      setValue("Alamat", "");
      setValue("X", 105.26667);
      setValue("Y", -5.45);
      setValue("Image", "");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (value) {
      setValue("X", value.lng);
      setValue("Y", value.lat);
    }
  }, [value]);

  useEffect(() => {
    if (
      watch("Name") !== "" &&
      watch("Tahun_Berdiri") !== 0 &&
      watch("Jumlah_Prodi") !== 0 &&
      watch("Kabupaten") !== "" &&
      watch("Deskripsi") !== "" &&
      watch("Alamat") !== "" &&
      watch("X") !== 0 &&
      watch("Y") !== 0 &&
      watch("Image") !== ""
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    return () => {};
  }, [
    watch("Name"),
    watch("Tahun_Berdiri"),
    watch("Jumlah_Prodi"),
    watch("Kabupaten"),
    watch("Deskripsi"),
    watch("Alamat"),
    watch("X"),
    watch("Y"),
    watch("Image"),
  ]);

  return (
    <div className="admin-input-data">
      <h1
        style={{
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        Input Data Perguruan Tinggi
      </h1>
      <div className="content">
        <form
          action=""
          className="input-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="row">
            <div className="input-group">
              <label htmlFor="Name">Nama Perguruan Tinggi</label>
              <input
                id="Name"
                type="text"
                autoComplete="off"
                {...register("Name", { required: true })}
              />
            </div>
            <div className="input-group">
              <label htmlFor="Tahun_Berdiri">Tahun Berdiri</label>
              <input
                id="Tahun_Berdiri"
                type="number"
                {...register("Tahun_Berdiri", { required: true })}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-group">
              <label htmlFor="Jumlah_Prodi">Jumlah Program Studi</label>
              <input
                id="Jumlah_Prodi"
                type="number"
                {...register("Jumlah_Prodi", { required: true })}
              />
            </div>
            <div className="input-group">
              <label htmlFor="Kabupaten">Kabupaten/Kota</label>
              <input
                id="Kabupaten"
                type="text"
                autoComplete="off"
                {...register("Kabupaten", { required: true })}
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="Deskripsi">Deskripsi</label>
            <textarea
              id="Deskripsi"
              {...register("Deskripsi", { required: true })}
            />
          </div>
          <div className="input-group">
            <label htmlFor="Alamat">Alamat</label>
            <textarea id="Alamat" {...register("Alamat", { required: true })} />
          </div>
          <div className="map-box">
            <MapContainer
              center={[-5.45, 105.26667]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%", zIndex: 0 }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {!value && (
                <Marker position={[-5.45, 105.26667]}>
                  <Popup>{watch("Name")}</Popup>
                </Marker>
              )}
              <LocationMarker />
            </MapContainer>
          </div>
          <div className="row">
            <div className="input-group">
              <label htmlFor="X">Logitude (X)</label>
              <input
                type="text"
                id="X"
                defaultValue={105.26667}
                {...register("X", { required: true })}
              />
            </div>
            <div className="input-group">
              <label htmlFor="Y">Latitude (Y)</label>
              <input
                type="text"
                id="Y"
                defaultValue={-5.45}
                {...register("Y", { required: true })}
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="Image">Image</label>
            <input
              id="Image"
              type="text"
              {...register("Image", { required: true })}
            />
          </div>
          <button disabled={isDisabled}>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default AdminInputData;
