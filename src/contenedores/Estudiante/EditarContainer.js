import React, { useState, useEffect } from "react";

import EditarComponent from "../../componentes/Estudiante/EditarEstudiante";
const EditarContainer = (props) => {
  const [datos, setDatos] = useState({
    apPaterno: "",
    apMaterno: "",
    nombre: "",
    direccion: "",
    carrera: "",
    edad: 0,
  });
  // const [redireccionar, setRedireccionar] = useState(false);

  useEffect(() => {
    console.log(props.match.params.id);
    console.log("gg");
    fetch(
      "http://localhost/library/estudiante/buscar.php?id=" +
        props.match.params.id
    )
      .then((res) => res.json())
      .then((respuesta) => {
        setDatos({
          apPaterno: respuesta.apPaterno,
          apMaterno: respuesta.apMaterno,
          nombre: respuesta.nombre,
          direccion: respuesta.direccion,
          carrera: respuesta.carrera,
          edad: respuesta.edad,
        });
      });
  }, [props]);

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // axios.post('',respuesta);
    fetch(
      "http://localhost/library/estudiante/modificar.php?id=" +
        props.match.params.id,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      }
    );
  };

  /*   if (redireccionar) {
    return <Redirect to="/ListarContainer" />;
  }
 */
  return (
    <EditarComponent
      onChange={handleChange}
      onSubmit={onSubmit}
      datos={datos}
    />
  );
};
export default EditarContainer;
