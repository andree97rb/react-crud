import React, { useState } from "react";
import RegistrarLibroComponent from "../../componentes/Libro/RegistrarLibro";

const RegistrarLibro = () => {
  const [respuesta, setRespuesta] = useState({
    titulo: "",
    autor: "",
    editorial: "",
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

    fetch("http://localhost/library/libro/registrar.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(respuesta),
    })
      .then((res) => {
        console.log(res.status);
        if (res.status === 201) {
          setRespuesta({
            titulo: "",
            autor: "",
            editorial: "",
          });
          alert("Libro registrado");
        }
      })
      .catch((err) => console.log("ERROR"));
  };

  return (
    <RegistrarLibroComponent
      datos={respuesta}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default RegistrarLibro;
