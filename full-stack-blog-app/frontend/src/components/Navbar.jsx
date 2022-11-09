import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import navbarLinks from "../data/navbarLinks";
import useAuth from "../hooks/useAuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();

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
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link to="/login">Login</Link>
          )}
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
