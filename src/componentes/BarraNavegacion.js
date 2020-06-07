import React from "react";
import { Link } from "react-router-dom";
import { FaBookReader, FaBook, FaHome } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const BarraNavegacion = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="a">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="nav-item nav-link active">
              <Link to="/a">
                <FaHome /> Inicio
              </Link>
            </div>
            <div className="nav-item nav-link">
              <Link to="/listadoEstudiante">
                <FaBook /> Estudiante
              </Link>
            </div>
            <div className="nav-item nav-link">
              <Link to="/listadoLibro">
                <FaBook /> Libro
              </Link>
            </div>
            <div className="nav-item nav-link">
              <Link to="/listadoPrestamo">
                <FaBookReader /> Préstamo
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BarraNavegacion;
