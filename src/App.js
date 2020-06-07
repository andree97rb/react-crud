import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BarraNavegacion from "./componentes/BarraNavegacion";
import ListarEstudiante from "./contenedores/Estudiante/ListarEstudiante";
import RegistrarEstudiante from "./contenedores/Estudiante/RegistrarEstudiante";
import RegistrarPrestamo from "./contenedores/Prestamo/RegistrarPrestamos";
import EditarContainer from "./contenedores/Estudiante/EditarContainer";
import ListarLibro from "./contenedores/Libro/ListarLibro";
import RegistrarLibro from "./contenedores/Libro/RegistrarLibro";
import EditarLibro from "./contenedores/Libro/EditarContainerL";
import EditarPrestamo from "./contenedores/Prestamo/EditarPrestamo";
import ListarPrestamo from "./contenedores/Prestamo/ListarPrestamo";

function App() {
  return (
    <Router>
      <BarraNavegacion />
      <Switch>
        <Route path="/a"></Route>
        {/* Estudiante  ------------------------------------*/}
        <Route path="/listadoEstudiante" component={ListarEstudiante}></Route>
        <Route
          path="/registrarEstudiante"
          component={RegistrarEstudiante}
        ></Route>
        <Route path="/EditarContainer/:id" component={EditarContainer}></Route>
        {/* Libro  ------------------------------------*/}
        <Route path="/listadoLibro" component={ListarLibro}></Route>
        <Route path="/registrarLibro" component={RegistrarLibro}></Route>
        <Route path="/editarLibro/:idLibro" component={EditarLibro}></Route>
        {/* prestamo  ------------------------------------*/}
        <Route path="/registrarPrestamo" component={RegistrarPrestamo}></Route>
        <Route path="/listadoPrestamo" component={ListarPrestamo}></Route>
        <Route
          path="/editarPrestamo/:idPrestamo"
          component={EditarPrestamo}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
