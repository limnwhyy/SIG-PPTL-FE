import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useDetailKampus from "../hooks/useDetailKampus";
import { SubmitHandler, useForm } from "react-hook-form";
import { axiosInstance } from "../utils/axios";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import LocationMarker from "../components/LocationMarker";
import { useMarker } from "../context/MarkerContext";
import { mutate } from "swr";

type PerguruanTinggiEditInput = {
  Name: string;
  X: number;
  Y: number;
  Tahun_Berdiri: number;
  Jumlah_Prodi: number;
  Kabupaten: string;
  Deskripsi: string;
  Alamat: string;
  Image: string;
};

const AdminPerguruanTinggiEdit = () => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  // ====================== //
  const { id } = useParams<{ id: string }>();
  const { value, removeValue } = useMarker();
  const { data: dataa, error, isLoading } = useDetailKampus();
  const { register, handleSubmit, watch, setValue } =
    useForm<PerguruanTinggiEditInput>();

  const onSubmit: SubmitHandler<PerguruanTinggiEditInput> = async (data) => {
    try {
      const params = {
        ...data,
        Jumlah_Prodi: +data.Jumlah_Prodi,
        Tahun_Berdiri: +data.Tahun_Berdiri,
        X: +data.X,
        Y: +data.Y,
      };

      console.log(params);
      await axiosInstance.patch(`/v1/koordinat-kampus/${dataa?.id}`, params);
      alert("Berhasil update data perguruan tinggi");
      navigate(-1);
      removeValue();
      mutate(`/v1/koordinat-kampus/${id}`);
    } catch (error) {
      alert("Gagal update data perguruan tinggi");
    }
  };

  useEffect(() => {
    if (
      watch("Name") !== "" &&
      watch("Tahun_Berdiri") !== 0 &&
      watch("Jumlah_Prodi") !== 0 &&
      watch("Kabupaten") !== "" &&
      watch("Deskripsi") !== "" &&
      watch("Alamat") !== "" &&
      watch("Image") !== "" &&
      watch("X") !== 0 &&
      watch("Y") !== 0
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
    watch("Image"),
    watch("X"),
    watch("Y"),
  ]);

  useEffect(() => {
    if (value) {
      setValue("X", value.lng);
      setValue("Y", value.lat);
    }

    return () => {};
  }, [value]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="admin-input-data">
      <h1
        style={{
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        Edit Data Perguruan Tinggi
      </h1>
      <div className="content">
        <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="input-group">
              <label htmlFor="Name">Nama Perguruan Tinggi</label>
              <input
                id="Name"
                defaultValue={dataa?.Name}
                {...register("Name", { required: true })}
              />
            </div>
            <div className="input-group">
              <label htmlFor="Tahun_Berdiri">Tahun Berdiri</label>
              <input
                id="Tahun_Berdiri"
                defaultValue={dataa?.Tahun_Berdiri}
                {...register("Tahun_Berdiri", { required: true })}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-group">
              <label htmlFor="Jumlah_Prodi">Jumlah Program Studi</label>
              <input
                id="Jumlah_Prodi"
                defaultValue={dataa?.Jumlah_Prodi}
                {...register("Jumlah_Prodi", { required: true })}
              />
            </div>
            <div className="input-group">
              <label htmlFor="Kabupaten">Kabupaten/Kota</label>
              <input
                id="Kabupaten"
                defaultValue={dataa?.Kabupaten}
                {...register("Kabupaten", { required: true })}
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="Deskripsi">Deskripsi</label>
            <textarea
              id="Deskripsi"
              defaultValue={dataa?.Deskripsi}
              {...register("Deskripsi", { required: true })}
            />
          </div>
          <div className="input-group">
            <label htmlFor="Alamat">Alamat</label>
            <textarea
              id="Alamat"
              defaultValue={dataa?.Alamat}
              {...register("Alamat", { required: true })}
            />
          </div>

          <div className="map-box">
            <MapContainer
              center={[dataa!.Y, dataa!.X]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {!value && (
                <Marker position={[dataa!.Y, dataa!.X]}>
                  <Popup>{dataa?.Name}</Popup>
                </Marker>
              )}
              <LocationMarker />
            </MapContainer>
          </div>
          <div className="row">
            <div className="input-group">
              <label htmlFor="X">Logitude (X)</label>
              <input
                id="X"
                defaultValue={dataa?.X}
                {...register("X", { required: true })}
              />
            </div>
            <div className="input-group">
              <label htmlFor="Y">Latitude (Y)</label>
              <input
                id="Y"
                defaultValue={dataa?.Y}
                {...register("Y", { required: true })}
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="Image">Image</label>
            <input
              id="Image"
              defaultValue={dataa?.Image}
              {...register("Image", { required: true })}
            />
          </div>
          <button disabled={isDisabled}>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default AdminPerguruanTinggiEdit;
