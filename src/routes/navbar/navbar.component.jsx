import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";
import Icon from "../../components/category-item/category-item-icon.component";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="plant based journey logo"
          />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/about">
            About <Icon index={0} />
          </Link>
          <Link className="nav-link" to="/reviews">
            Reviews <Icon index={1} />
          </Link>
          <Link className="nav-link" to="/recipes">
            Recipes <Icon index={2} />
          </Link>
          <Link className="nav-link" to="/contact">
            Contact <Icon index={4} />
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
