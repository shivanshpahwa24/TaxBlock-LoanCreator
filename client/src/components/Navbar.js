import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow sticky-top py-1 px-4 navbar-expand-lg navbar-light">
      <div className="container-fluid d-flex align-items-center mx-0 p-1 justify-content-between">
        <div>
          <h3>ReportKeeper</h3>
        </div>
        <div className="d-flex">
          <div className="collapse navbar-collapse" id="navbarToggler">
            <NavLink
              className="nav-link"
              to="/"
              exact={true}
              style={{ color: "#343a40" }}
              activeStyle={{ color: "#17a2b8" }}
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link"
              to="/marks"
              style={{ color: "#343a40" }}
              activeStyle={{ color: "#17a2b8" }}
            >
              Enter New Record
            </NavLink>
            <NavLink
              className="nav-link"
              to="/leaderboard"
              style={{ color: "#343a40" }}
              activeStyle={{ color: "#17a2b8" }}
            >
              Leaderboard
            </NavLink>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
