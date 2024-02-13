import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navbar-container">
        <div className="logo">
          <div className="logo-holder">
            <p>PORT</p>
            <p>FOLIO</p>
          </div>
        </div>
        <div className="navlinks">
          <NavLink to={"/"}>HOME</NavLink>
          <NavLink to={"/about"}>ABOUT</NavLink>
          <NavLink to={"/"}>SERVICES</NavLink>
          <NavLink to={"/"}>BLOG</NavLink>
          <NavLink to={"/"}>CONTACT</NavLink>
        </div>
        <div className="down-cv">
          <NavLink to={"/"}>Download CV</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
