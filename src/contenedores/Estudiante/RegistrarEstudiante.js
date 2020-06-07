import React, { useState } from "react";
import RegistrarEstudianteComponent from "../../componentes/Estudiante/RegistrarEstudiante";

const RegistrarEstudiante = () => {
  const [respuesta, setRespuesta] = useState({
    apPaterno: "",
    apMaterno: "",
    nombre: "",
    direccion: "",
    carrera: "",
    edad: 0,
  });

  const handleChange = (e) => {
    setRespuesta({
      ...respuesta,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.post('',respuesta);

    fetch("http://localhost/library/estudiante/registrar.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(respuesta),
    })
      .then((res) => {
        if (res.status === 201) {
          setRespuesta({
            apPaterno: "",
            apMaterno: "",
            nombre: "",
            direccion: "",
            carrera: "",
            edad: 0,
          });
          console.log("se registro");
        }
      })
      .catch((err) => console.log("ERROR"));
  };

  return (
    <RegistrarEstudianteComponent
      datos={respuesta}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default RegistrarEstudiante;
