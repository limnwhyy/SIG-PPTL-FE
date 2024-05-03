import { NavLink, useNavigate } from "react-router-dom";
import * as FaIcon from "react-icons/fa";
import adminPath from "../constants/adminPath";
import "./NavbarAdminStyle.css";
import { assets } from "../constants/assets";
import { useLocalStorage } from "usehooks-ts";
import { ILocalStorageToken } from "../constants/interfaces";

const NavbarAdmin = () => {
  const [_, __, removeValue] = useLocalStorage<ILocalStorageToken>("token", {
    access_token: "",
  });

  const navigate = useNavigate();

  return (
    <div className="admin-navbar">
      <div className="content">
        <div
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <figure>
            <img src={assets.webIcon} alt="logo" />
          </figure>
          <div className="text-container">
            <p>Sistem Informasi Geografis</p>
            <h3>Persebaran Perguruan Tinggi Lampung</h3>
          </div>
        </div>
        <div className="nav-item">
          {adminPath.map((item, index) => {
            return (
              <NavLink key={index} to={item.path} className="item">
                <p>{item.name}</p>
              </NavLink>
            );
          })}
          <div
            className="item"
            onClick={() => {
              removeValue();
            }}
          >
            <FaIcon.FaPowerOff />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
