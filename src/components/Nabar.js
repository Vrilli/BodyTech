import React from "react";
import { Button } from "react-bootstrap";
import "../styles/Nabar.css"


const Nabar = () => {
  return (
    <div className="contenido">
      <nav className="navbar">
       <div className="container-fluid">
        <a className="navbar-brand" >
          <img src="https://res.cloudinary.com/vrilli/image/upload/v1647003897/bodytech_bkayam.png" alt="" width="150" height="100" className="d-inline-block align-text-top img" />
        </a>
        <Button  className="button-sesion" variant="outline-dark">Cerrar Sesion</Button>
      </div>
      </nav>
    </div>
  );
};

export default Nabar;
