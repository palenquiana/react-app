import { NavLink } from "react-router-dom";
import React from "react";
import "../../../../src/assets/styles.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            ToDoApp
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/categories">
                Categorias
              </NavLink>
              <NavLink className="nav-link" to="/users">
                Usuarios
              </NavLink>{" "}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
