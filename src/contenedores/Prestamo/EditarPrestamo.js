import React, { useState, useEffect } from "react";

import EditarPrestamoComponente from "../../componentes/Prestamo/EditarPrestamo";
const EditarPrestamo = (props) => {
  const [data, setData] = useState({
    idLibro: 0,
    titulo: "",
    idEstudiante: 0,
    estudiante: "",
  });

  const [prestamos, setPrestamos] = useState({
    idEstudiante: 0,
    idLibro: 0,
  });
  const [libros, setLibro] = useState([]);
  const [estudiantes, setEstudiante] = useState([]);

  useEffect(() => {
    console.log("gg");

    fetch("http://localhost/library/estudiante/listar.php")
      .then((resp) => resp.json())
      .then((data) => setEstudiante(data))
      .then(() =>
        fetch("http://localhost/library/libro/listar.php")
          .then((resp) => resp.json())
          .then((data) => setLibro(data))
      );
  }, [props]);

  useEffect(() => {
    console.log("gg");
    fetch(
      "http://localhost/library/prestamo/listar2.php?idPrestamo=" +
        props.match.params.idPrestamo
    )
      .then((respuesta) => respuesta.json())
      .then((res) => {
        setData({
          idLibro: res.idLibro,
          titulo: res.titulo,
          idEstudiante: res.id,
          estudiante: res.apPaterno + " " + res.apMaterno + " " + res.nombre,
        });
        console.log("id del estudiante:" + res.id);
        console.log(res);

        setPrestamos({
          idLibro: res.idLibro,
          idEstudiante: res.id,
        });
      })
      .catch((err) => console.log(err));
  }, [props]);

  // const [redireccionar, setRedireccionar] = useState(false);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log("valor:" + e.target.value);

    setPrestamos({
      ...prestamos,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // axios.post('',respuesta);
    fetch(
      "http://localhost/library/prestamo/modificar.php?idPrestamo=" +
        props.match.params.idPrestamo,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(prestamos),
      }
    )
      .then((res) => {
        if (res.status) {
          alert("Modificado correctamente");
        }
      })
      .catch((err) => console.log("Falla de servidor"));
  };

  //   /*   if (redireccionar) {
  //     return <Redirect to="/ListarContainer" />;
  //   }
  //  */
  return (
    <EditarPrestamoComponente
      onChange={handleChange}
      onSubmit={onSubmit}
      // data={data}
      estudiantes={estudiantes}
      libros={libros}
      data={data}
    />
  );
};
export default EditarPrestamo;
