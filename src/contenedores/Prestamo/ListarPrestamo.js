import React, { useState, useEffect } from "react";
import ListarComponentComponent from "../../componentes/Prestamo/ListarPrestamo";

const ListarPrestamo = () => {
  const [respuesta, setRespuesta] = useState([]);

  useEffect(() => {
    fetch("http://localhost/library/prestamo/listar.php")
      .then((res) => res.json())
      .then((res) => setRespuesta(res));
  }, []);

  return <ListarComponentComponent respuesta={respuesta} />;
};

export default ListarPrestamo;
