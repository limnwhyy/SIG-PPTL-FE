import * as FaIcon from "react-icons/fa";
import * as MDIcon from "react-icons/md";
import "./FooterStyle.css";

const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <div className="rich-content">
        <div className="content">
          <h3 className="title">Kontak</h3>
          <div className="items-group">
            <div className="item">
              <FaIcon.FaPhone />
              <p>Telepon : {"(021) 8888 777"}</p>
            </div>
            <div className="item">
              <MDIcon.MdEmail />
              <p>Email : sigpptlampung@email.com</p>
            </div>
            <div className="item">
              <MDIcon.MdWarning />
              <p>
                <a href="#">Laporkan penyalahgunaan</a>
              </p>
            </div>
            <div className="item">
              <MDIcon.MdBook size={14} />
              <p>
                <a
                  href="https://peraturan.bpk.go.id/Download/181108/Peraturan%20BIG%20Nomor%2010%20Tahun%202015.pdf"
                  target="_blank"
                >
                  Pedoman Penyelenggaraan Pendidikan dan Pelatihan Sistem
                  Informasi Geografis Di Badan Informasi Geospasial
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="content">
          <h3 className="title">Informasi Pengembang</h3>
          <div className="items-group">
            <div className="item">
              <MDIcon.MdGroups />
              <p>Tim Pengembang: Kelompok SIG ITERA 2024</p>
            </div>
            <div className="item">
              <FaIcon.FaPhone />
              <p>Telepon : {"(021) 9999 888"}</p>
            </div>
            <div className="item">
              <MDIcon.MdEmail />
              <p>Email : kelompokXSIGITERA@email.com</p>
            </div>
          </div>
          <h3 className="title">Lokasi</h3>
          <div className="items-group">
            <div className="item">
              <MDIcon.MdLocationPin />
              <p>
                Jl.Ratu Dibalau, Kelurahan Way Kandis, Tanjung Senang, Kota
                Bandar Lampung, Lampung 35135
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        &copy; {date.getFullYear()} Sistem Informasi Geografis Persebaran
        Perguruan Tinggi Lampung
      </div>
    </footer>
  );
};

export default Footer;
