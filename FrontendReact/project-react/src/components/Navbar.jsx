import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          <i
            className="bi bi-bootstrap-fill text-success me-2"
            style={{ fontSize: "22px" }}
          ></i>
          Inicio
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/input"} className="nav-link" aria-current="page">
                Input
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/images"} className="nav-link" href="#">
                Imagenes
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
