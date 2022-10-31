import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import navbarLinks from "../data/navbarLinks";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="navbar__links">
          {navbarLinks.map(({ linkTo, title }, index) => {
            return (
              <Link className="navbar__links--link" to={linkTo} key={index}>
                <h6>{title}</h6>
              </Link>
            );
          })}
          <span>John</span>
          <span>Logout</span>
          <span className="navbar__links--write">
            <Link className="navbar__links--link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
