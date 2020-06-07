import React from "react";
import { Link } from "react-router-dom";

const ListarPrestamo = ({ respuesta }) => (
  <div className="wrapper-components ">
    <div className="wrapper-in w-75">
      <div className="mb-3 d-flex justify-content-between">
        <strong className="title-pag">Listado Prestamo</strong>
        <Link to="/registrarPrestamo" className="btn btn-primary">
          Agregar
        </Link>
      </div>

      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titulo del Libro</th>
            <th scope="col">Estudiante</th>
          </tr>
        </thead>
        <tbody>
          {respuesta.map((res) => (
            <tr key={res.idPrestamo}>
              <td>{res.idPrestamo}</td>
              <td>{res.tituloLibro}</td>
              <td>{res.nombreEstudiante}</td>
              <td>
                <Link
                  to={"/editarPrestamo/" + res.idPrestamo}
                  className="links"
                >
                  Editar
                </Link>
                | Eliminar
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ListarPrestamo;
