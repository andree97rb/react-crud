import React, { useState, useEffect } from "react";
import RegistrarPrestamoComponente from "../../componentes/Prestamo/RegistrarPrestamo";

const RegistrarPrestamo = () => {
  const [data, setData] = useState({
    libro: 0,
    estudiante: 0,
  });

  const [libros, setLibro] = useState([]);
  const [estudiantes, setEstudiante] = useState([]);

  useEffect(() => {
    fetch("http://localhost/library/estudiante/listar.php")
      .then((resp) => resp.json())
      .then((data) => setEstudiante(data))
      .then(() =>
        fetch("http://localhost/library/libro/listar.php")
          .then((resp) => resp.json())
          .then((data) => setLibro(data))
          .catch((error) => console.log(error))
      )
      .catch((error) => console.log(error));
  }, []);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost/library/prestamo/registrar.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => {
        if (resp.status === 201) {
          setData({
            estudiante: 0,
            libro: 0,
          });
          alert("Se registró correctamente.");
        }
      })
      .catch((error) => console.log("ss"));
  };

  return (
    <RegistrarPrestamoComponente
      form={data}
      onChange={handleChange}
      onSubmit={handleSubmit}
      estudiante={estudiantes}
      libro={libros}
    />
  );
};

export default RegistrarPrestamo;
