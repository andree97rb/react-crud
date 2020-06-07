import React, { useState, useEffect } from "react";
import ListarComponentComponent from "../../componentes/Estudiante/ListarEstudiante";

const ListarEstudiante = () => {
  const [respuesta, setRespuesta] = useState([]);

  useEffect(() => {
    fetch("http://localhost/library/estudiante/listar.php")
      .then((res) => res.json())
      .then((res) => setRespuesta(res));
  }, []);

  return <ListarComponentComponent respuesta={respuesta} />;
};

export default ListarEstudiante;
