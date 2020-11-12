import React, { useState } from 'react';
import Error from '../Error/Error';
import Spinner from '../Spinner/Spinner';

const IngresoJugadores = () => {

	



	return (
		<section className="section">
			<div className="columns">
				<form className="column is-10-mobile is-10-tablet">
					<legend>
						<h2 className="title">INGRESE JUGADORES</h2>
					</legend>
					<div>
						<div className="field mt-2">
							<label className="label">JUGADOR 1</label>
							<div className="control">
								<input
									className="input is-small is-warning"
									type="text"
									placeholder="Nombre jugador 1"
									name="jugador1"
								/>
							</div>
						</div>
						<div className="field mt-2">
							<label className="label">JUGADOR 2</label>
							<div className="control">
								<input
									className="input is-small is-warning"
									type="text"
									placeholder="Nombre jugador 2"
									name="jugador2"
								/>
							</div>
						</div>
						<div className="field mt-2">
							<label className="label">JUGADOR 3</label>
							<div className="control">
								<input
									className="input is-small is-warning"
									type="text"
									placeholder="Nombre jugador 3"
									name="jugador3"
								/>
							</div>
						</div>
						<div className="field mt-2">
							<label className="label">JUGADOR 4</label>
							<div className="control">
								<input
									className="input is-small is-warning"
									type="text"
									placeholder="Nombre jugador 4"
									name="jugador4"
								/>
							</div>
						</div>
						<div className="field mt-2">
							<label className="label">JUGADOR 5</label>
							<div className="control">
								<input
									className="input is-small is-warning"
									type="text"
									placeholder="Nombre jugador 5"
									name="jugador5"
								/>
							</div>
						</div>
						<div className="field mt-2">
							<label className="label">JUGADOR 6</label>
							<div className="control">
								<input
									className="input is-small is-warning"
									type="text"
									placeholder="Nombre jugador 6"
									name="jugador6"
								/>
							</div>
						</div>
						<div className="field mt-2">
							<label className="label">JUGADOR 7</label>
							<div className="control">
								<input
									className="input is-small is-warning"
									type="text"
									placeholder="Nombre jugador 7"
									name="jugador7"
								/>
							</div>
						</div>
						<div className="field mt-2">
							<label className="label">JUGADOR 8</label>
							<div className="control">
								<input
									className="input is-small is-warning"
									type="text"
									placeholder="Nombre jugador 8"
									name="jugador8"
								/>
							</div>
						</div>
						<div className="field mt-2">
							<label className="label">JUGADOR 9</label>
							<div className="control">
								<input
									className="input is-small is-warning"
									type="text"
									placeholder="Nombre jugador 9"
									name="jugador9"
								/>
							</div>
						</div>
						<div className="field mt-2">
							<label className="label">JUGADOR 10</label>
							<div className="control">
								<input
									className="input is-small is-warning"
									type="text"
									placeholder="Nombre jugador 10"
									name="jugador10"
								/>
							</div>
						</div>
						<div className="field mt-2">
							<label className="label">JUGADOR 11</label>
							<div className="control">
								<input
									className="input is-small is-warning"
									type="text"
									placeholder="Nombre jugador 11"
									name="jugador11"
								/>
							</div>
						</div>
						<div className="field mt-2">
							<label className="label">JUGADOR 12</label>
							<div className="control">
								<input
									className="input is-small is-warning"
									type="text"
									placeholder="Nombre jugador 12"
									name="jugador12"
								/>
							</div>
						</div>

						<div className="field mt-2 has-text-centered">
							<button type='submit' className="button is-warning is-small">INGRESAR</button>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default IngresoJugadores;
