import { assets } from "../constants/assets";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HeaderStyle.css";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <header>
      <div className="container">
        <figure>
          <img src={assets.bg1} alt="background" />
        </figure>
        <div className="content">
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="text-container"
          >
            <h3>SISTEM INFORMASI GEOGRAFIS</h3>
            <h1>
              Persebaran <br /> Perguruan Tinggi <br /> Lampung
            </h1>
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
      </div>
    </header>
  );
};

export default Header;
