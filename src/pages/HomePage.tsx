import HomePageMap from "../components/HomePageMap";
import { assets } from "../constants/assets";
import Header from "../components/Header";
import { useEffect } from "react";
import AOS from "aos";
import "./HomePageStyle.css";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="home-page">
      <Header />
      <main>
        <h2>Denah Persebaran Perguruan Tinggi di Lampung</h2>
        <div
          className="container map-box"
          data-aos-easing="ease-in-sine"
          data-aos-offset="300"
          data-aos="fade-left"
        >
          <HomePageMap />
        </div>
        <div className="container">
          <h1>
            Selamat datang di Sistem Informasi Geografis
            <br />
            Persebaran Perguruan Tinggi di Lampung
          </h1>

          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="content"
          >
            <div className="text-container">
              <h1>
                Temukan lokasi perguruan tinggi <br />
                di seluruh Lampung <br /> dengan peta interaktif
              </h1>
            </div>
            <figure>
              <img src={assets.image1} alt="image1" />
            </figure>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="content-child"
          >
            <div className="text-container">
              <h1>
                Temukan lokasi perguruan tinggi <br />
                di seluruh Lampung <br /> dengan peta interaktif
              </h1>
            </div>
            <figure>
              <img src={assets.image2} alt="image2" />
            </figure>
          </div>
        </div>
      </main>
    </div>
  );
};
export default HomePage;
