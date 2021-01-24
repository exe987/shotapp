import React from "react";
import DatosJugador from "../DatosJugador/DatosJugador";
import DatosClase from "../DatosClase/DatosClase";

const Dashboard = () => {
  return (
    <div className="container is-fullhd">
      <section className="hero is-medium">
        <DatosClase />
        <div className="hero-body">
          <DatosJugador />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
