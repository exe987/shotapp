import React, { Fragment, useContext } from 'react';
import IngresoJugadores from '../IngresoJugadores/IngresoJugadores';
import DatosJugador from '../DatosJugador/DatosJugador';
import JugadoresContext from '../../context/jugadores/jugadoresContext';

const Dashboard = () => {
	//DATOS CONTEXT
	const jugadoresDeContext = useContext(JugadoresContext);
	const { jugadores, ronda } = jugadoresDeContext;

	return (
		<Fragment>
			<IngresoJugadores />
			<div className="container is-fullhd">
				<DatosJugador />
			</div>
		</Fragment>
	);
};

export default Dashboard;
