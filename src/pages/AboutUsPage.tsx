import { assets } from "../constants/assets";
import "./AboutUsPageStyle.css";

const AboutUsPage = () => {
  return (
    <div className="about-page">
      <main>
        <div className="header">
          <div className="logo">
            <figure>
              <img src={assets.webIcon} alt="logo" />
            </figure>
            <div className="text-container">
              <h3>SIG</h3>
              <p>SISTEM INFORMASI GEOGRAFIS</p>
              <h1>PPTL</h1>
              <p>PERSEBARAN PERGURUAN TINGGI LAMPUNG</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Sistem Informasi Geografis Persebaran Perguruan tinggi Lampung
              merupakan sebuah media untuk transparansi tata letak dan
              persebaran perguruan tinggi di Lampung. Berdasarkan Sustainable
              Development Goals 4 tentang Pendidikan Berkualitas, sistem ini
              diharapkan dapat mendukung akses pendidikan ke jenjang tinggi
              secara merata serta ikut berkontribusi demi menunjang kualitas
              pendidikan yang berkelanjutan di Lampung.
            </p>
          </div>
        </div>
        <hr />
        <section id="tentang-sig-pptl">
          <h3 className="title">Tentang SIG PPTL</h3>
          <div className="section-content">
            <h4>Mengenal Lebih Dekat Pendidikan Tinggi di Lampung</h4>
            <p>
              Provinsi Lampung, yang terletak di ujung selatan Pulau Sumatera,
              memiliki sejumlah perguruan tinggi yang berperan penting dalam
              menciptakan generasi penerus yang berkualitas. Dari kampus-kampus
              ini, lahir para pemimpin, peneliti, dan profesional yang
              berkontribusi pada pembangunan daerah dan bangsa.
            </p>
          </div>
          <div className="section-content">
            <h4>Mengapa Sistem Informasi Geografis</h4>
            <p>
              Sistem Informasi Geografis (SIG) adalah alat yang memungkinkan
              kita untuk memvisualisasikan, menganalisis, dan memahami data
              geografis. Dalam konteks pendidikan tinggi, SIG dapat membantu
              kita melihat distribusi kampus-kampus di seluruh wilayah Lampung
              dengan lebih jelas. Dengan SIG, kita dapat menggambarkan lokasi,
              ukuran, dan karakteristik setiap institusi pendidikan tinggi.
            </p>
          </div>
          <div className="section-content">
            <h4>Tujuan Sistem Informasi Geografis Pendidikan Tinggi</h4>
            <ol>
              <li>
                Transparansi : SIG memungkinkan masyarakat dan calon mahasiswa
                untuk melihat secara transparan lokasi dan informasi tentang
                perguruan tinggi di Lampung.
              </li>
              <li>
                Pengambilan Keputusan : Dengan SIG, kita dapat membandingkan
                lokasi, fasilitas, dan program studi yang ditawarkan oleh
                berbagai perguruan tinggi. Ini membantu calon mahasiswa dan
                orang tua dalam mengambil keputusan yang tepat.
              </li>
              <li>
                Pengembangan Wilayah : SIG membantu pemerintah dan lembaga
                terkait dalam merencanakan pengembangan wilayah dan alokasi
                sumber daya pendidikan.
              </li>
            </ol>
          </div>
          <div className="section-content">
            <h4>Kontribusi terhadap SDG 4: Pendidikan Berkualitas</h4>
            <p>
              Sistem Informasi Geografis Pendidikan Tinggi Lampung berkontribusi
              pada Tujuan Pembangunan Berkelanjutan (SDG) nomor 4, yaitu
              “Pendidikan Berkualitas.” Dengan memperkuat akses informasi
              tentang perguruan tinggi, kita mendukung upaya untuk meningkatkan
              kualitas pendidikan di Lampung.
            </p>
          </div>
        </section>
        <hr />
        <section id="tentang-pengembang">
          <h3 className="title">Tentang Pengembang</h3>
          <div className="section-content">
            <h4>Sekilas Tentang Pengembang</h4>
            <p>
              Pengembang merupakan mahasiswa dari Institut Teknologi Sumatera
              yang mengembangkan SIG PPTL untuk tugas besar mata kuliah Sistem
              Informasi Geografis 2024. Kami beranggotakan X orang dengan
              rincian anggota tim sebagai berikut:
            </p>
            <ol>
              <li>Muhammad Muslim Nur Wahyudi (NIM: XXXXXXXXX)</li>
              <li>Muhammad Alhafiz (NIM: XXXXXXXXX)</li>
              <li>Ichza Aulia Gumilar (NIM: XXXXXXXXX)</li>
              <li>Aggota 4</li>
              <li>Aggota 5</li>
              <li>Aggota 6</li>
              <li>Aggota 7</li>
            </ol>
          </div>
          <div className="section-content">
            <h4>Kontak Pengembang</h4>
            <p>Telepon: (021) 9999 888</p>
            <p>Email: kelompokXxsigitera@email.com</p>
          </div>
        </section>
        <hr />
        <section id="tech-stack">
          <h3>Tech Stack</h3>
          <div className="section-content">
            <h4>Teknologi Yang Kami Gunakan Dalam Pengembangan Sistem Ini</h4>
            <ul>
              <li>React JS</li>
              <li>Nest JS</li>
              <li>QGIS</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUsPage;
