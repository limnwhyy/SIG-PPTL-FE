import { NavLink } from "react-router-dom";
import path from "../constants/path";
import { assets } from "../constants/assets";
import "./NavbarStyle.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-item">
        <div className="icons">
          <figure>
            <img src={assets.webIcon} alt="sigpkl.png" />
          </figure>
          <h3>PPTL</h3>
        </div>
        <ul>
          {path.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.path}>{item.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
