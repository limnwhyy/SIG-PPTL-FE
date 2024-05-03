import { PerguruanTinggiProps } from "../constants/interfaces";
import ModalContainer from "../components/ModalContainer";
import useDaftarKampus from "../hooks/useDaftarKampus";
import CatalogModal from "../components/CatalogModal";
import DetailButton from "../components/DetailButton";
import { useModal } from "../context/ModalContext";
import { useEffect, useState } from "react";
import { mutate } from "swr";
import "./CatalogPageStyle.css";

const CatalogPage = () => {
  const { show, setShow } = useModal();
  const [search, setSearch] = useState<string>("");
  const [modalData, setModalData] = useState<PerguruanTinggiProps>();

  const { data, error, isLoading } = useDaftarKampus();

  const handleModal = () => {
    setShow(true);
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = (search: string) => {
    if (data) {
      const filteredData = data.filter((item) =>
        item.Name.toLowerCase().includes(search.toLowerCase())
      );
      mutate("/v1/koordinat-kampus", filteredData, false);
    }
  };

  useEffect(() => {
    if (!show) {
      setModalData(undefined);
    }
    return () => {};
  }, [modalData, show]);

  useEffect(() => {
    if (search === "") {
      mutate("/v1/koordinat-kampus");
    }
    return () => {};
  }, [search]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error...</p>
      ) : (
        <div className="catalog-page">
          <ModalContainer isOpen={show}>
            {modalData && (
              <CatalogModal
                data={modalData}
                handleClose={() => setShow(false)}
              />
            )}
          </ModalContainer>
          <main>
            <div className="header">
              <h3>Data Persebaran Perguruan Tinggi di Lampung</h3>
              <p>
                Data diupdate pada{" "}
                {new Date().toLocaleDateString("id-ID", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="search-form">
              <div className="input-group">
                <label htmlFor="namaPt">Cari Perguruan Tinggi</label>
                <input
                  type="text"
                  name="namaPt"
                  id="namaPt"
                  autoComplete="off"
                  placeholder="Nama perguruan tinggi..."
                  onChange={onChangeSearch}
                />
              </div>
              <button onClick={() => handleSearch(search)}>
                <span>Cari</span>
              </button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Universitas</th>
                  <th>Tahun Berdiri</th>
                  <th>Jumlah Program Studi</th>
                  <th>Kabupaten/Kota</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {data?.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      style={{
                        textAlign: "center",
                      }}
                    >
                      Data tidak ditemukan
                    </td>
                  </tr>
                ) : (
                  data?.map((item, i) => (
                    <tr key={item.id}>
                      <td>{i + 1}</td>
                      <td>{item.Name}</td>
                      <td>{item.Tahun_Berdiri}</td>
                      <td>{item.Jumlah_Prodi}</td>
                      <td>{item.Kabupaten}</td>
                      <td>
                        <DetailButton
                          onClick={() => {
                            console.log(item);
                            handleModal();
                            setModalData(item);
                          }}
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="warning-container">
              <p>
                Data yang ditampilkan adalah data terbaru dari kemendikbud,
                terakhir diperbarui pada{" "}
                {new Date().toLocaleDateString("id-ID", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                pukul 00.00 WIB. Apabila terdapat kesalahan informasi pada data
                yang ditampilkan harap laporkan melalui tautan berikut:{" "}
                <span>
                  <a
                    onClick={() => {
                      alert("Fitur ini belum tersedia");
                    }}
                  >
                    Laporkan kesalahan data
                  </a>
                </span>
              </p>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default CatalogPage;
