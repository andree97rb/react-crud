import React from "react";
import { Link } from "react-router-dom";

const ListarLibro = ({ respuesta }) => (
  <div className="wrapper-components ">
    <div className="wrapper-in w-75">
      <div className="mb-3 d-flex justify-content-between">
        <strong className="title-pag">Listado Libro </strong>
        <Link to="/registrarLibro" className="btn btn-primary">
          Agregar
        </Link>
      </div>

      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titulo</th>
            <th scope="col">Autor</th>
            <th scope="col">Editorial</th>
          </tr>
        </thead>
        <tbody>
          {respuesta.map((res) => (
            <tr key={res.idLibro}>
              <td>{res.idLibro}</td>
              <td>{res.titulo}</td>
              <td>{res.autor}</td>
              <td>{res.editorial}</td>

              <td>
                <Link to={"/editarLibro/" + res.idLibro} className="links">
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

export default ListarLibro;
