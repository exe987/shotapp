import React, { useState, useContext, useEffect, Fragment } from 'react';
import JugadoresContext from '../../context/jugadores/jugadoresContext';
const DatosJugador = () => {
	//DATOS CONTEXT
	const jugadoresDeContext = useContext(JugadoresContext);
	const { jugadores, agregarTiro, ronda } = jugadoresDeContext;

	//EXTRAER ELEMENTOS DE RONDA
	let ultimoTiro;
	let ultimoTirador;
	let porcentajeDistancia;
	if (ronda.length >= 1) {
		ultimoTiro = ronda[ronda.length - 1].acierto;
		ultimoTirador = ronda[ronda.length - 1].nombre;
		porcentajeDistancia = ronda.map((tiros) => Number(tiros.distancia)).reduce((a, b) => a + b, 0);
	}

	//STATE TIRO JUGADOR
	const [ desempeño, desempeñoJugador ] = useState({
		nombre: null,
		acierto: false,
		distancia: null
	});

	//FUNCION QUE COLOCA LOS ELEMENTOS EN EL STATE
	const handleClick = (e) => {
		//ACTUALIZA EL STATE
		desempeñoJugador({
			...desempeño,
			[e.target.name]: e.target.value
		});
	};
	//EXTRAER ELEMENTOS DEL ESTADO LOCAL
	let { nombre, acierto, distancia } = desempeño;
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(desempeño);
		agregarTiro(desempeño);
	};
	return (
		<Fragment>
			<nav className="level mt-5 has-background-light">
				<div className="level-item has-text-centered">
					<div>
						<p className="heading">ULTIMO TIRADOR</p>
						{ronda.length >= 1 ? <p className="title">{ultimoTirador}</p> : <p className="title">---</p>}
					</div>
				</div>
				<div className="level-item has-text-centered">
					<div>
						<p className="heading">ULTIMO TIRO</p>
						{ronda.length >= 1 ? ultimoTiro ? (
							<p className="title">Encestó</p>
						) : (
							<p className="title">Erró</p>
						) : (
							<p className="title">---</p>
						)}
					</div>
				</div>
				<div className="level-item has-text-centered">
					<div>
						<p className="heading">PORCENTAJE DISTANCIA</p>
						{ronda.length >= 1 ? (
							<p className="title">{porcentajeDistancia / ronda.length} m.</p>
						) : (
							<p className="title">---</p>
						)}
					</div>
				</div>
			</nav>

			<div className="columns is-gapless is-multiline is-centered">
				{jugadores.map((jugador) => (
					<form
						key={jugador.nombre}
						className="card has-background-black ml-2 mt-2 column is-3 mb-3"
						onSubmit={handleSubmit}
					>
						<div className="card-header-title title is-3 has-text-white">
							{jugador.nombre.toUpperCase()}
						</div>
						<div className="card-header-icon">
							<button
								type="button"
								name="nombre"
								value={jugador.nombre}
								onClick={handleClick}
								className="button is-link is-medium is-fullwidth is-outlined"
							>
								SELECCIONAR
							</button>
						</div>
						<div className="card-header-icon">
							<button
								type="button"
								name="acierto"
								value={true}
								onClick={handleClick}
								className="button is-success is-small is-fullwidth is-outlined"
							>
								ENCESTO
							</button>
						</div>
						<div className="card-header-icon">
							<button
								type="button"
								name="acierto"
								value={false}
								onClick={handleClick}
								className="button is-danger is-small is-fullwidth is-outlined"
							>
								NO ENCESTO
							</button>
						</div>
						<div className="cancha card-image">
							<img
								alt={jugador.nombre}
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Basketball_Halfcourt_Transparant.svg/250px-Basketball_Halfcourt_Transparant.svg.png"
							/>
							<div className="sector">
								<div className="alto">
									<button
										type="button"
										className="foco"
										name="distancia"
										value={5}
										onClick={handleClick}
									/>
									<button
										type="button"
										className="foco"
										name="distancia"
										value={2}
										onClick={handleClick}
									/>
									<button
										type="button"
										className="foco"
										name="distancia"
										value={5}
										onClick={handleClick}
									/>
								</div>
								<div className="bajo">
									<button
										type="button"
										className="foco"
										name="distancia"
										value={8}
										onClick={handleClick}
									/>
									<button
										type="button"
										className="foco"
										name="distancia"
										value={8}
										onClick={handleClick}
									/>
								</div>
							</div>
						</div>
						<div className="card-header-icon">
							<button className="button is-medium is-outlined is-fullwidth is-white" type="submit">
								AGREGAR TIRO
							</button>
						</div>
					</form>
				))}
			</div>
		</Fragment>
	);
};

export default DatosJugador;
