import React, { useState, useContext } from 'react';
import JugadoresContext from '../../context/jugadores/jugadoresContext';
const DatosJugador = () => {
	//DATOS CONTEXT
	const jugadoresDeContext = useContext(JugadoresContext);
	const { jugadores, ronda, tiro, agregarTiro } = jugadoresDeContext;

	//STATE TIRO JUGADOR
	const [ desempeño, desempeñoJugador ] = useState({
		nombre: null,
		acierto: null,
		distancia: null
	});

	//FUNCION QUE COLOCA LOS ELEMENTOS EN EL STATE
	const handleClick = (e, a) => {
		//ACTUALIZA EL STATE
		desempeñoJugador({
			...desempeño,
			[e.target.name]: {
				[e.target.name]: e.target.value,
				id: e.target.dataset.key
			}
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		//EXTRAER ELEMENTOS DEL ESTADO LOCAL
		let { nombre, acierto, distancia } = desempeño;

		if (nombre.nombre.trim() === '' || acierto.acierto.trim() === '' || distancia.distancia.trim() === '') {
			alert('salame');
		} else {
			//COMPARAR ID DE ENTRADAS
			if (nombre.id === acierto.id) {
				if (acierto.id === distancia.id) {
					alert('fenomeno');
				}
			} else {
				alert('idiota');
			}
		}
	};
	return (
		<div className="columns is-gapless is-multiline is-centered">
			{jugadores.map((jugadores) => (
				<form
					className="card borde has-background-gray ml-2 mt-2 column is-3 "
					onSubmit={handleSubmit}
					key={jugadores.id}
				>
					<div className="card-header-title title is-3">{jugadores.nombre}</div>
					<div className="card-header-icon">
						<button
							data-key={jugadores.id}
							type="button"
							name="nombre"
							value={jugadores.nombre}
							onClick={handleClick}
							className="button is-link is-large is-fullwidth"
						>
							SELECCIONAR
						</button>
					</div>
					<div className="card-header-icon">
						<button
							data-key={jugadores.id}
							type="button"
							name="acierto"
							value={true}
							onClick={handleClick}
							className="button is-success is-small is-fullwidth"
						>
							ENCESTO
						</button>
					</div>
					<div className="card-header-icon">
						<button
							data-key={jugadores.id}
							type="button"
							name="acierto"
							value={false}
							onClick={handleClick}
							className="button is-danger is-small is-fullwidth"
						>
							NO ENCESTO
						</button>
					</div>
					<div className="cancha card-image">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Basketball_Halfcourt_Transparant.svg/250px-Basketball_Halfcourt_Transparant.svg.png" />
						<div className="sector">
							<div className="alto">
								<button
									data-key={jugadores.id}
									type="button"
									className="foco"
									name="distancia"
									value={5}
									onClick={handleClick}
								/>
								<button
									data-key={jugadores.id}
									type="button"
									className="foco"
									name="distancia"
									value={2}
									onClick={handleClick}
								/>
								<button
									data-key={jugadores.id}
									type="button"
									className="foco"
									name="distancia"
									value={5}
									onClick={handleClick}
								/>
							</div>
							<div className="bajo">
								<button
									data-key={jugadores.id}
									type="button"
									className="foco"
									name="distancia"
									value={8}
									onClick={handleClick}
								/>
								<button
									data-key={jugadores.id}
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
						<button className="button is-fullwidth is-black" type="submit">
							AGREGAR TIRO
						</button>
					</div>
				</form>
			))}
		</div>
	);
};

export default DatosJugador;
