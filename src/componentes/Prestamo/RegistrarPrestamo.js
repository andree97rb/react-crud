import React from "react";
const RegistroPrestamo = ({ form, onChange, onSubmit, estudiante, libro }) => (
  <div>
    <h3>Registrar Prestamo</h3>
    <form onSubmit={onSubmit}>
      <div>
        Estudiante:
        <select
          required
          name="estudiante"
          value={form.estudiante}
          onChange={onChange}
        >
          <option value={0}>Seleccionar</option>
          {estudiante.map((cat) => (
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
        <select required name="libro" value={form.libro} onChange={onChange}>
          <option value={0}>Seleccionar</option>
          {libro.map((cat) => (
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

export default RegistroPrestamo;
