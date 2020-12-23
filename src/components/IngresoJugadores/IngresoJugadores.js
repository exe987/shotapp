import React, { useState, useContext } from 'react';
import uuid from 'uuid/dist/v4';
import Spinner from '../Spinner/Spinner';
import JugadoresContext from '../../context/jugadores/jugadoresContext';

const IngresoJugadores = () => {
	//DATOS CONTEXT
	const jugadoresDeContext = useContext(JugadoresContext);
	const { agregarJugador, nombres, spinner, mostrarSpinner } = jugadoresDeContext;
	//ESTADOS LOCALES
	const [ jugador, ingresoJugador ] = useState({
		nombre: '',
		id: null
	});
	const [ form, mostrarForm ] = useState(false);
	//FUNCION PARA ABRIR Y CERRAR FORMULARIO
	const openForm = () => {
		if (form) {
			mostrarForm(false);
		} else {
			mostrarForm(true);
		}
	};
	//FUNCION QUE COLOCA LOS ELEMENTOS EN EL STATE
	const handleChange = (e) => {
		//ACTUALIZA EL STATE
		ingresoJugador({
			...jugador,
			[e.target.name]: e.target.value
		});
	};
	const { nombre } = jugador;
	//SUBMIT DATOS
	const handleSubmit = (e) => {
		e.preventDefault();
		mostrarSpinner(true);
		if (nombre.trim() === '' || nombres.includes(nombre)) {
			setTimeout(() => {
				mostrarSpinner(false);
				alert('Ya existe un jugador con ese nombre!!!!');
				ingresoJugador({
					nombre: '',
					id: null
				});
				return;
			}, 2000);
		} else {
			setTimeout(() => {
				jugador.id = uuid();
				agregarJugador(jugador);
				mostrarSpinner(false);
				ingresoJugador({
					nombre: '',
					id: null
				});
			}, 2000);
		}
	};
	return (
		<div>
			{spinner ? <Spinner /> : null}
			{!form ? (
				<section className="hero shade is-large">
					<div className="hero-body">
						<div className="container has-text-centered">
							<svg viewBox="0 0 960 300">
								<symbol id="s-text">
									<text text-anchor="middle" x="50%" y="80%">
										SHOTAPP
									</text>
								</symbol>
								<g className="g-ants">
									<use xlinkHref="#s-text" className="text-copy" />
									<use xlinkHref="#s-text" className="text-copy" />
									<use xlinkHref="#s-text" className="text-copy" />
									<use xlinkHref="#s-text" className="text-copy" />
									<use xlinkHref="#s-text" className="text-copy" />
								</g>
							</svg>
							<p className="subtitle">
								<button type="button" className="button is-danger is-outlined mt-3" onClick={openForm}>
									INGRESA CLASE
								</button>
							</p>
						</div>
					</div>
				</section>
			) : (
				<section className="hero shade is-large">
					<div className="hero-body">
						<nav className="level">
							<div className="level-item has-text-centered">
								<div>
									<p className="heading has-text-warning title is-3">JUGADORES</p>
			<p className="title has-text-warning is-1">{nombres.length}</p>
								</div>
							</div>
							<div className="level-item has-text-centered">
								{' '}
								<button type="submit" className="button is-warning is-outlined mt-3" onClick={openForm}>
									IR A CLASE
								</button>
							</div>
						</nav>
						<div className="columns is-centered">
							<form className="column is-6 is-half" onSubmit={handleSubmit}>
								<div className="field">
									<div className="control">
										<input
											autoFocus
											className="input is-medium is-danger"
											type="text"
											placeholder={`INGRESE JUGADOR ${nombres.length+1}`}
											name="nombre"
											value={nombre}
											onChange={handleChange}
										/>
									</div>
								</div>
								<div className="level ">
									<div className="level-item has-text-centered">
										{' '}
										<button type="submit" className="button is-danger is-outlined mt-3">
											INGRESA TU JUGADOR 
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</section>
			)}
		</div>
	);
};
export default IngresoJugadores;
