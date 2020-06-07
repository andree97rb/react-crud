import React from "react";
const EditarLibro = ({ onChange, onSubmit, data }) => (
  <div className="wrapper-components">
    <div className="wrapper-in  ">
      <strong className="title-pag">Editar Libro </strong>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Titulo</label>
          <input
            type="text"
            required
            className="form-control"
            placeholder="Ingrese título"
            name="titulo"
            value={data.titulo}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label> Autor</label>
          <input
            type="text"
            required
            className="form-control"
            placeholder="Ingrese Autor"
            name="autor"
            value={data.autor}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Editorial</label>
          <input
            type="text"
            required
            className="form-control"
            placeholder="Ingrese Editorial"
            name="editorial"
            value={data.editorial}
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

export default EditarLibro;
