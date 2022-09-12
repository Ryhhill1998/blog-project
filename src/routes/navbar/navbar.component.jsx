import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="nav-links-container-left">
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/reviews">
            Reviews
          </Link>
        </div>
        <Link className="logo-container" to="/">
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="plant based journey logo"
          />
        </Link>
        <div className="nav-links-container-right">
          <Link className="nav-link" to="/recipes">
            Recipes
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
