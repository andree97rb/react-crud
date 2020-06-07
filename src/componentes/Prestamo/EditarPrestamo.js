import React from "react";
const EditarPrestamo = (
  /* { data, onChange, onSubmit } */ { onChange,estudiantes, libros, data,onSubmit}
) => (
  <div>
    <h3>Editar Prestamo</h3>
    <form onSubmit={onSubmit} >
      <div>
        Estudiante:
        <select
          required
          name="idEstudiante"
          value={data.idEstudiante}
          onChange={onChange}
        >
          <option value={-1}>Seleccionar</option>
          {estudiantes.map((cat) => (
            <option
              key={cat.id}
              // esto no para eso esta el value <-selected={form.categoria===cat.codigo?'selected':''}
              value={cat.id}
            >
              {cat.apPaterno} {cat.apMaterno} {cat.nombre}
            </option>
          ))}
        </select>
      </div>

      <div>
        Libro:
        <select
          required
          name="idLibro"
          value={data.idLibro} onChange={onChange} 
        >
          <option value={-1}>Seleccionar</option>
          {libros.map((cat) => (
            <option
              key={cat.idLibro}
              // esto no para eso esta el value <-selected={form.categoria===cat.codigo?'selected':''}
              value={cat.idLibro}
            >
              {cat.titulo}
            </option>
          ))}
        </select>
      </div>
      <div>
        <input type="submit" value="Registrar" />
      </div>
    </form>
  </div>
);

export default EditarPrestamo;
