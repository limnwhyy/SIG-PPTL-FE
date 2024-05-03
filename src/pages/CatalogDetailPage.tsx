import useDetailKampus from "../hooks/useDetailKampus";
import { useParams } from "react-router-dom";
import "./CatalogDetailPageStyle.css";

const CatalogDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useDetailKampus();

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="detail-kampus">
          <h1
            style={{
              textAlign: "center",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
          >
            {data?.Name}
          </h1>
          <figure
            style={{
              maxWidth: "100vw",
              objectFit: "cover",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              width={"50%"}
              src="https://masuk-ptn.com/images/product/368b1d936cf9be5ef1d7c936bc793c306655880f.jpg"
              alt="institutteknologisumatera.png"
            />
          </figure>
          <div
            style={{
              gap: "1rem",
              margin: "auto",
              padding: "1rem",
              width: "80%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data?.Name === `Institut Teknologi Sumatera "ITERA"` ? (
              <>
                <p
                  style={{
                    textAlign: "center",
                  }}
                >
                  {
                    "Institut Teknologi Sumatera, disingkat ITERA, adalah sebuah perguruan tinggi negeri yang terdapat di Provinsi Lampung di Pulau Sumatra . Lokasinya berada di antara wilayah Kabupaten Lampung Selatan dengan Kota Bandar Lampung. ITERA didirikan berdasarkan Peraturan Presiden Nomor 124 Tahun 2014 tentang Pendirian Institut Teknologi Sumatera (Lembaran Negara Republik Indonesia Tahun 2014 Nomor 253 yang ditetapkan Presiden Republik Indonesia Dr. H. Susilo Bambang Yudhoyono pada tanggal 6 Oktober 2014 dan diundangkan tanggal 9 Oktober 2014. Walaupun peresmiannya dilaksanakan pada tahun 2014, tetapi ITERA sudah memulai kegiatan akademik dengan menerima mahasiswa baru sejak tahun 2012-2013. Selain ITB dan ITS, dengan dibukanya ITERA dan ITK, maka pemerintah Indonesia memiliki empat institut teknologi. Dalam konteks strategi utama pelaksanaan Masterplan Percepatan dan Perluasan Pembangunan Ekonom Indonesia (MP3EI), peran sumberdaya manusia yang berpendidikan menjadi kunci utama dalam mendukung pertumbuhan ekonomi yang berkesinambungan. Oleh karena itu, tujuan utama di dalam sistem pendidikan dan pelatihan untuk mendukung hal tersebut di atas haruslah bisa menciptakan sumberdaya manusia yang mampu beradaptasi dengan cepat terhadap perkembangan sains dan teknologi. Upaya percepatan pembangunan nasional, khususnya dalam bidang sains, teknologi dan seni, memerlukan kesiapan penyediaan sumberdaya manusia yang unggul. Untuk itu, Kementerian Pendidikan dan Kebudayaan memiliki program pendirian institut teknologi negeri di Pulau Sumatera. Saat ini terdapat sekitar 42 program studi yang terbagi kedalam 3 fakultas, diantaranya:"
                  }
                </p>
                <table
                  style={{
                    width: "50%",
                    tableLayout: "fixed",
                  }}
                  className="table"
                >
                  <thead>
                    <tr>
                      <th>Fakultas</th>
                      <th>Program Studi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          textAlign: "center",
                        }}
                      >
                        Fakultas Sains
                      </td>
                      <td
                        style={{
                          paddingLeft: "5rem",
                        }}
                      >
                        <ul>
                          <li>Fisika</li>
                          <li>Matematika</li>
                          <li>Biologi</li>
                          <li>Kimia</li>
                          <li>Farmasi</li>
                          <li>Atmosfer dan Keplanetan</li>
                          <li>Sains Aktuaria</li>
                          <li>Sains Lingkungan Kelautan</li>
                          <li>Sains Data</li>
                          <li>Magister Fisika</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          textAlign: "center",
                        }}
                      >
                        Fakultas Teknologi Infrastuktur dan Kewilayahan
                      </td>
                      <td
                        style={{
                          paddingLeft: "5rem",
                        }}
                      >
                        <ul>
                          <li>Teknik Geomatika</li>
                          <li>Perencanaan Wilayah dan Kota</li>
                          <li>Teknik Sipil</li>
                          <li>Teknik Arsitektur</li>
                          <li>Teknik Lingkungan</li>
                          <li>Teknik Kelautan</li>
                          <li>Desain Komunikasi Visual</li>
                          <li>Arsitektur Lanskap</li>
                          <li>Teknik Perkeretaapian</li>
                          <li>Rekayasa Tatakelola Air Terpadu</li>
                          <li>Pariwisata</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          textAlign: "center",
                        }}
                      >
                        Fakultas Teknologi Industri
                      </td>
                      <td
                        style={{
                          paddingLeft: "5rem",
                        }}
                      >
                        <ul>
                          <li>Teknik Elektro</li>
                          <li>Teknik Geofisika</li>
                          <li>Teknik Informatika</li>
                          <li>Teknik Geologi</li>
                          <li>Teknik Mesin</li>
                          <li>Teknik Industri</li>
                          <li>Teknik Kimia</li>
                          <li>Teknik Fisika</li>
                          <li>Teknik Biosistem</li>
                          <li>Teknik Industri Pertanian</li>
                          <li>Teknik Pangan</li>
                          <li>Teknik Sistem Energi</li>
                          <li>Teknik Pertambangan</li>
                          <li>Teknik Material</li>
                          <li>Teknik Telekomunikasi</li>
                          <li>Rekayasa Kehutanan</li>
                          <li>Teknik Biomedik</li>
                          <li>Teknik Rekayasa Keolahragaan</li>
                          <li>Rekayasa Minyak dan Gas</li>
                          <li>Rekayasa Instrumentasi dan Automasi</li>
                          <li>Rekayasa Kosmetik</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            ) : (
              <p>No Data</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CatalogDetailPage;
