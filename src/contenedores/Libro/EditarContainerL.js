import React, { useState, useEffect } from "react";

import EditarLibro from "../../componentes/Libro/EditarLibro";
const EditarContainerL = (props) => {
  const [data, setData] = useState({
    titulo: "",
    autor: "",
    editorial: "",
  });
  // const [redireccionar, setRedireccionar] = useState(false);

  useEffect(() => {
    console.log("gg");
    fetch(
      "http://localhost/library/libro/buscar.php?idLibro=" +
        props.match.params.idLibro
    )
      .then((res) => res.json())
      .then((res) => {
        setData({
          titulo: res.titulo,
          autor: res.autor,
          editorial: res.editorial,
        });
      });
  }, [props]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // axios.post('',respuesta);
    fetch(
      "http://localhost/library/libro/modificar.php?idLibro=" +
        props.match.params.idLibro,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => {
        if (res.status) {
          alert("Modificado correctamente");
        }
      })
      .catch((err) => console.log("Falla de servidor"));
  };

  /*   if (redireccionar) {
    return <Redirect to="/ListarContainer" />;
  }
 */
  return (
    <EditarLibro onChange={handleChange} onSubmit={onSubmit} data={data} />
  );
};
export default EditarContainerL;
