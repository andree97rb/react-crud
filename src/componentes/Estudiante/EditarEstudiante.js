import React from "react";
const EditarEstudiante = ({ onChange, onSubmit, datos }) => (
  <div className="wrapper-components">
    <div className="wrapper-in  ">
      <strong className="title-pag">Editar Estudiante </strong>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Apellido Paterno</label>
          <input
            type="text"
            required
            className="form-control"
            placeholder="Ingrese Ap Paterno"
            name="apPaterno"
            value={datos.apPaterno}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label> Apellido Materno</label>
          <input
            type="text"
            required
            className="form-control"
            placeholder="Ingrese Ap Materno"
            name="apMaterno"
            value={datos.apMaterno}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label> Nombre</label>
          <input
            type="text"
            required
            className="form-control"
            placeholder="Ingrese Ap Materno"
            name="nombre"
            value={datos.nombre}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label> Dirección</label>
          <input
            type="text"
            required
            className="form-control"
            placeholder="Ingrese Ap Materno"
            name="direccion"
            value={datos.direccion}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label> Carrera</label>
          <input
            type="text"
            required
            className="form-control"
            placeholder="Ingrese Ap Materno"
            name="carrera"
            value={datos.carrera}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label> Edad</label>
          <input
            type="number"
            required
            className="form-control"
            placeholder="Ingrese Ap Materno"
            name="edad"
            value={datos.edad}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  </div>
);

export default EditarEstudiante;
