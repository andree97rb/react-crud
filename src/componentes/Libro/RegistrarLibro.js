import React from "react";

const RegistrarLibro = ({ onChange, onSubmit, datos }) => (
  <div className="wrapper-components">
    <div className="wrapper-in  ">
      <strong className="title-pag">Registrar Libro </strong>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            required
            className="form-control"
            placeholder="Ingrese Título"
            name="titulo"
            value={datos.titulo}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label> Autor</label>
          <input
            type="text"
            required
            className="form-control"
            placeholder="Ingrese autor"
            name="autor"
            value={datos.autor}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label> Editorial</label>
          <input
            type="text"
            required
            className="form-control"
            placeholder="Ingrese editorial"
            name="editorial"
            value={datos.editorial}
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

export default RegistrarLibro;
