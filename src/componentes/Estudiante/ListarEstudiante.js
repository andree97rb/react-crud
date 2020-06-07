import React from "react";
import { Link } from "react-router-dom";

const ListarEstudiante = ({ respuesta }) => (
  <div className="wrapper-components ">
    <div className="wrapper-in w-75">
      <div className="mb-3 d-flex justify-content-between">
        <strong className="title-pag">Listado Estudiante </strong>
        <Link to="/registrarEstudiante" className="btn btn-primary">
          Agregar
        </Link>
      </div>

      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Apellido Paterno</th>
            <th scope="col">Apellido Materno</th>
            <th scope="col">Nombre</th>
            <th scope="col">Dirección</th>
            <th scope="col">Carrera</th>
            <th scope="col">Edad</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {respuesta.map((res) => (
            <tr key={res.id}>
              <td>{res.id}</td>
              <td>{res.apPaterno}</td>
              <td>{res.apMaterno}</td>
              <td>{res.nombre}</td>
              <td>{res.direccion}</td>
              <td>{res.carrera}</td>
              <td>{res.edad}</td>
              <td>
                <Link to={"/EditarContainer/" + res.id} className="links">
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

export default ListarEstudiante;
