import React, { Fragment, useContext, useEffect } from 'react';

import IngresoJugadores from '../IngresoJugadores/IngresoJugadores';
import DatosJugador from '../DatosJugador/DatosJugador';
import JugadoresContext from '../../context/jugadores/jugadoresContext';

const Dashboard = () => {
	//DATOS CONTEXT
	const jugadoresDeContext = useContext(JugadoresContext);
	const { jugadores, ronda } = jugadoresDeContext;

	//ULTIMO TIRO
	let ultimoTiro = ronda[ronda.length - 1].acierto.acierto;
	console.log(ultimoTiro)
	//ULTIMA DISTANCIA
	let ultimaDistancia = ronda[ronda.length - 1].distancia.distancia;

	//ULTIMO NOMBRE
	let ultimoNombre = ronda[ronda.length - 1].nombre.nombre;

	return (
		<Fragment>
			<nav class="level">
				<div class="level-item has-text-centered">
					<div>
						<p class="heading">ULTIMO TIRO</p>
						<p class="title">
							{' '}
							{ultimoTiro === false ? `${ultimoNombre} ERRO!!!` : `${ultimoNombre} ENCESTO!!!`}{' '}
						</p>
					</div>
				</div>
				<div class="level-item has-text-centered">
					<div>
						<p class="heading">ULTIMA DISTANCIA</p>
						<p class="title"> {ultimaDistancia} m </p>
					</div>
				</div>
				<div class="level-item has-text-centered">
					<div>
						<p class="heading">Followers</p>
						<p class="title">456K</p>
					</div>
				</div>
				<div class="level-item has-text-centered">
					<div>
						<p class="heading">Likes</p>
						<p class="title">789</p>
					</div>
				</div>
			</nav>
			{jugadores.length < 2 ? (
				<div>
					<IngresoJugadores />
				</div>
			) : (
				<div className="container is-fullhd">
					<DatosJugador />
				</div>
			)}
		</Fragment>
	);
};

export default Dashboard;
