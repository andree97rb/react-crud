import React, { useState, useEffect } from "react";
import ListarComponentComponent from "../../componentes/Libro/ListarLibro";

const ListarLibro = () => {
  const [respuesta, setRespuesta] = useState([]);

  useEffect(() => {
    fetch("http://localhost/library/libro/listar.php")
      .then((res) => res.json())
      .then((res) => setRespuesta(res));
  }, []);

  return <ListarComponentComponent respuesta={respuesta} />;
};

export default ListarLibro;
