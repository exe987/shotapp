import React, { useState, useContext } from 'react';
import JugadoresContext from '../../context/jugadores/jugadoresContext';
const DatosJugador = () => {
	//DATOS CONTEXT
	const jugadoresDeContext = useContext(JugadoresContext);
	const { jugadores, agregarTiro } = jugadoresDeContext;

	//STATE TIRO JUGADOR
	const [ desempeño, desempeñoJugador ] = useState({
		nombre: null,
		acierto: false,
		distancia: null
	});
	
	//STATE DE JUGADOR SELECCIONADO
	const [seleccionado, seleccionar] = useState(false)

	//FUNCION QUE COLOCA LOS ELEMENTOS EN EL STATE
	const handleClick = (e) => {
		//ACTUALIZA EL STATE
		desempeñoJugador({
			...desempeño,
			desempeño: {
				[e.target.name]: e.target.value,
				id: e.target.dataset.key
			}
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		//EXTRAER ELEMENTOS DEL ESTADO LOCAL
		let { nombre, acierto, distancia } = desempeño;
		console.log(desempeño)
		if (nombre.nombre.trim() === '' || acierto.acierto === null || distancia.distancia === null) {
			alert('Completa los datos del tiro');
		} else {
			//COMPARAR ID DE ENTRADAS
			if (nombre.id === acierto.id) {
				if (acierto.id === distancia.id) {
					agregarTiro(desempeño);
				}
			} else {
				alert('No coinciden los ingresos con el jugador seleccionado');
			}
		}
	};
	return (
		<div className="columns is-gapless is-multiline is-centered">
			{jugadores.map((jugadores) => (
				<form
					className="card has-background-black ml-2 mt-2 column is-3 mb-3"
					onSubmit={handleSubmit}
					key={jugadores.id}
				>
					<div className="card-header-title title is-3 has-text-white">{jugadores.nombre.toUpperCase()}</div>
					<div className="card-header-icon">
						<button
							data-key={jugadores.id}
							type="button"
							name="nombre"
							value={jugadores.nombre}
							onClick={handleClick}
							className="button is-link is-medium is-fullwidth is-outlined"
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
							className="button is-success is-small is-fullwidth is-outlined"
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
							className="button is-danger is-small is-fullwidth is-outlined"
						>
							NO ENCESTO
						</button>
					</div>
					<div className="cancha card-image">
						<img
							alt={jugadores.nombre}
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Basketball_Halfcourt_Transparant.svg/250px-Basketball_Halfcourt_Transparant.svg.png"
						/>
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
						<button className="button is-medium is-outlined is-fullwidth is-white" type="submit">
							AGREGAR TIRO
						</button>
					</div>
				</form>
			))}
		</div>
	);
};

export default DatosJugador;
